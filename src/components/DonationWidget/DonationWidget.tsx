import { useState } from "react";
import styles from "./donationWidget.module.css";

export function DonationWidget() {
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
    <div className={styles.donationWidget}>
      <p className={styles.title}>Совершите пожертвование онлайн</p>
      <div className={styles.modalContent}>
        <div className={styles.gridContainer}>
          <button
            className={`${styles.amountButton} ${
              selectedAmount === "100" ? styles.selected : ""
            }`}
            onClick={() => handleAmountClick("100")}
          >
            100 р.
          </button>
          <button
            className={`${styles.amountButton} ${
              selectedAmount === "1000" ? styles.selected : ""
            }`}
            onClick={() => handleAmountClick("1000")}
          >
            1000 р.
          </button>
          <button
            className={`${styles.amountButton} ${
              selectedAmount === "300" ? styles.selected : ""
            }`}
            onClick={() => handleAmountClick("300")}
          >
            300 р.
          </button>
          <button
            className={`${styles.amountButton} ${
              selectedAmount === "3000" ? styles.selected : ""
            }`}
            onClick={() => handleAmountClick("3000")}
          >
            3000 р.
          </button>
          <button
            className={`${styles.amountButton} ${
              selectedAmount === "500" ? styles.selected : ""
            }`}
            onClick={() => handleAmountClick("500")}
          >
            500 р.
          </button>
          <input
            className={`${styles.otherSumm} ${
              customAmount ? styles.selected : ""
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
        <div className={styles.choiseContainer}>
          <RadioGroup
            options={options}
            selectedValue={donationType}
            onChange={setDonationType}
            name="donationType"
          />
          <button className={styles.helpButton}>Хочу помочь</button>
        </div>
      </div>
    </div>
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

const RadioGroup = ({
  options,
  selectedValue,
  onChange,
  name,
}: RadioGroupProps) => {
  return (
    <div className={styles.radioGroup}>
      {options.map((option) => (
        <label key={option.value} className={styles.radioLabel}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className={styles.radioInput}
          />
          <span className={styles.customRadio} />
          {option.label}
        </label>
      ))}
    </div>
  );
};