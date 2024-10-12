import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";


export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <div className={css.container}>
      <PageTitle>Your contacts</PageTitle>

      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p>Loading...</p>}
      <ContactList />
    </div>
  );
}