import styles from "./ContactsPage.module.css"
import { Contact } from "./Props";
import { Contacts } from "./data";
import Title from "../../components/title/title";

function ContactsPage() {
    return(
        <>
        <Title text="Контакты" />
        <ContactCards />
        </>
    )
}
export default ContactsPage

function ContactCards() {
  return (
    <>
    <div className={styles.contactGrid} >
      {Contacts.map((Contacts) => (
        <Contact
        image={Contacts.image}
        primary={Contacts.primary}
        secondary={Contacts.secondary} />
      ))}
    </div>
    </>
  );
}