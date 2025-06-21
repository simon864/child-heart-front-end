import { useModal } from "./donationModal";
import modalStyle from "./donationModal.module.css";
import closeImage from "../../assets/images/modal/donationModal.svg";
import { useState } from "react";

export function ModalPlaceholder() {
  const { isOpen, closeModal } = useModal();
  const [donationType, setDonationType] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const options = [
    { value: "once", label: "ОДНОКРАТНО" },
    { value: "monthly", label: "ЕЖЕМЕСЯЧНО" },
  ];

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <p className={modalStyle.title}>Совершите пожертвование онлайн</p>
      <div className={modalStyle.modalContent}>
        <div className={modalStyle.gridContainer}>
          <button
            className={`${modalStyle.amountButton} ${
              selectedAmount === "100" ? modalStyle.selected : ""
            }`}
            onClick={() => handleAmountClick("100")}
          >
            100 р.
          </button>
          <button
            className={`${modalStyle.amountButton} ${
              selectedAmount === "1000" ? modalStyle.selected : ""
            }`}
            onClick={() => handleAmountClick("1000")}
          >
            1000 р.
          </button>
          <button
            className={`${modalStyle.amountButton} ${
              selectedAmount === "300" ? modalStyle.selected : ""
            }`}
            onClick={() => handleAmountClick("300")}
          >
            300 р.
          </button>
          <button
            className={`${modalStyle.amountButton} ${
              selectedAmount === "3000" ? modalStyle.selected : ""
            }`}
            onClick={() => handleAmountClick("3000")}
          >
            3000 р.
          </button>
          <button
            className={`${modalStyle.amountButton} ${
              selectedAmount === "500" ? modalStyle.selected : ""
            }`}
            onClick={() => handleAmountClick("500")}
          >
            500 р.
          </button>
          <input
            className={`${modalStyle.otherSumm} ${
              customAmount ? modalStyle.selected : ""
            }`}
            type="number"
            placeholder="Другая сумма"
            value={customAmount}
            onChange={handleCustomAmountChange}
            onClick={() => {
              setSelectedAmount(null);
              if (customAmount) setCustomAmount(customAmount);
            }}
          />
        </div>
        <div className={modalStyle.choiseContainer}>
          <RadioGroup
            options={options}
            selectedValue={donationType}
            onChange={setDonationType}
            name="donationType"
          />
          <button className={modalStyle.helpButton}>Хочу помочь</button>
        </div>
      </div>
    </Modal>
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className={modalStyle.overlay} />

      <div className={modalStyle.modal}>
        <button className={modalStyle.closeButton} onClick={onClose}>
          <img
            className={modalStyle.closeImage}
            src={closeImage}
            alt="Крестик"
          />
        </button>
        <div className={modalStyle.content}>{children}</div>
      </div>
    </>
  );
}

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  name: string;
}

export const RadioGroup = ({
  options,
  selectedValue,
  onChange,
  name,
}: RadioGroupProps) => {
  return (
    <div className={modalStyle.radioGroup}>
      {options.map((option) => (
        <label key={option.value} className={modalStyle.radioLabel}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className={modalStyle.radioInput}
          />
          <span className={modalStyle.customRadio} />
          {option.label}
        </label>
      ))}
    </div>
  );
};
