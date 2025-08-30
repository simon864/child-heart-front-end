import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Title from "../../components/Title/title";
import helpStyle from "./NeedHelpPage.module.css";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { createTreatmentRequest } from "../../api/treatmentRequests";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { importantTextArr, textArr } from "./data";
import { ListOfDocuments, Important } from "./props";

export default function NeedHelpPage() {
  return (
    <ScrollToTop>
      <Title text="Как обратиться за помощью" />
      <HelpForm />
      <DocumentsContent />
      <ImportantContent />
      <LinkContent />
    </ScrollToTop>
  );
}

const sanitizeInput = (value: string) => {
  let safeValue = value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
  return safeValue.replace(/[^а-яА-ЯёЁa-zA-Z0-9\s\-().,]/g, "");
};

function HelpForm() {
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [parentName, setParentName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!childName.trim()) return "Укажите ФИО ребенка";
    if (!birthDate || birthDate.length !== 10) return "Укажите дату рождения";
    if (!isValidDate(birthDate)) return "Укажите корректную дату рождения";
    if (!diagnosis.trim()) return "Укажите диагноз";
    if (!parentName.trim()) return "Укажите ФИО представителя";
    if (!phone || phone.length < 18) return "Укажите корректный телефон";
    return null;
  };

  const isValidDate = (dateString: string): boolean => {
    const pattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    if (!pattern.test(dateString)) {
      return false;
    }

    const [_, day, month, year] = pattern.exec(dateString) || [];
    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    if (m < 1 || m > 12) return false;
    if (d < 1 || d > 31) return false;
    if (d > 28 && m === 2) return false;

    const inputDate = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    const hundredYearsAgo = new Date();
    hundredYearsAgo.setFullYear(today.getFullYear() - 100);
    hundredYearsAgo.setHours(0, 0, 0, 0);

    return inputDate <= today && inputDate >= hundredYearsAgo;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setIsLoading(true);

    try {
      await createTreatmentRequest({
        childName,
        birthDate,
        diagnosis,
        parentName,
        phone,
      });

      setBirthDate("");
      setPhone("");
      setChildName("");
      setDiagnosis("");
      setParentName("");

      toast.success("Заявка успешно отправлена!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      let errorMessage = "Произошла неизвестная ошибка";
      if (err instanceof Error) {
        errorMessage = err.message;
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={helpStyle.center}>
        <p className={helpStyle.titleForm}>
          Оставьте заявку на получение помощи
        </p>
      </div>
      <div className={helpStyle.formContainer}>
        <div className={helpStyle.center}>
          <p className={helpStyle.paragraphInfo1}>Информация о ребенке:</p>
        </div>
        <div className={helpStyle.center}>
          <p className={helpStyle.paragraphInfo2}>
            Информация о законном представителе:
          </p>
        </div>
        <input
          className={helpStyle.childNameInput}
          type="text"
          placeholder="ФИО ребенка"
          value={childName}
          onChange={(e) => {
            const filteredValue = e.target.value.replace(
              /[^а-яА-ЯёЁa-zA-Z\s-]/g,
              ""
            );
            setChildName(filteredValue);
          }}
          onKeyDown={(e) => {
            if (/[0-9!@#$%^&*()_+=<>?/[\]{}|\\,.:;'"`~]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <input
          className={helpStyle.parentNameInput}
          type="text"
          placeholder="ФИО представителя"
          value={parentName}
          onChange={(e) => {
            const filteredValue = e.target.value.replace(
              /[^а-яА-ЯёЁa-zA-Z\s'-]/g,
              ""
            );
            setParentName(filteredValue);
          }}
          onKeyDown={(e) => {
            if (/[0-9!@#$%^&*()_+=<>?/[\]{}|\\,.:;"`~]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <IMaskInput
          className={helpStyle.dateInput}
          mask="00.00.0000"
          placeholder="Дата рождения ребенка"
          value={birthDate}
          onAccept={(value) => setBirthDate(value)}
          overwrite
        />
        <IMaskInput
          placeholder="+7 (913) 999-99-99"
          mask="{+7} (000) 000-00-00"
          definitions={{
            "0": /[0-9]/,
          }}
          value={phone}
          onAccept={(value) => setPhone(value)}
          overwrite
        />
        <input
          className={helpStyle.diagnosisInput}
          type="text"
          placeholder="Диагноз ребенка"
          value={diagnosis}
          onChange={(e) => setDiagnosis(sanitizeInput(e.target.value))}
          onKeyDown={(e) => {
            if (/[!@#$%^&*_+=<>?/[\]{}|\\;'"`~]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />

        <button
          className={helpStyle.helpButton}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Отправка..." : "Нужна помощь"}
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
function DocumentsContent() {
  return (
    <div className={helpStyle.documentContainer}>
      <p className={helpStyle.titleText}>
        Перечень документов, необходимых для оказания Благополучателю
        материальной и иной помощи
      </p>
      {textArr.map((textArr, index) => (
        <ListOfDocuments key={index} text={textArr.text} />
      ))}
    </div>
  );
}

function ImportantContent() {
  return (
    <div className={helpStyle.importantContainer}>
      <p className={helpStyle.titleText}>Важно!</p>
      {importantTextArr.map((importantTextArr, index) => (
        <Important key={index} text={importantTextArr.text} />
      ))}
    </div>
  );
}

function LinkContent() {
  return (
    <>
      <div className={helpStyle.linkContainer}>
        <p className={helpStyle.titleText}>Ссылка на договор оферты</p>
        <a href="https://baby.kemcardio.ru/userfiles/file/oferta.pdf">
          https://baby.kemcardio.ru/userfiles/file/oferta.pdf
        </a>
      </div>
    </>
  );
}
