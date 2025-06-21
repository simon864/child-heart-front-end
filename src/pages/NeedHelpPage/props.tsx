import helpStyle from "./NeedHelpPage.module.css";

interface ListOfDocumentsProps {
  text: string;
}

interface ImportantProps {
  text: string;
}

export function ListOfDocuments({ text }: ListOfDocumentsProps) {
  return <p className={helpStyle.documentText}>{text}</p>;
}

export function Important({ text }: ImportantProps) {
  return (
    <ul>
      <li>{text}</li>
    </ul>
  );
}
