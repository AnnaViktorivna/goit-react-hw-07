import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from "./redux/selectors";
// import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { setFilter } from "./redux/filtersSlice";
// import { addContact, deleteContact } from "./redux/contactsSlice";
import { deleteContact, fetchContacts, addContact } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  const addNewContact = (newContact) => {
    const newUserContact = {
      ...newContact,
      id: nanoid(),
    };

    const action = addContact(newUserContact);
    dispatch(action);
  };

  // const deleteChooseContact = (contactId) => {
  //   const action = deleteContact(contactId);
  //   dispatch(action);
  // };
  const deleteChooseContact = (contactId) => dispatch(deleteContact(contactId));
  const onChangeFilter = (event) => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };
  // console.log(event.target.value);

  const visibleContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addNewContact} />
      <h2>Search contact</h2>
      <input
        type='text'
        placeholder='Search...'
        value={filter}
        onChange={onChangeFilter}
      />
      <ContactList contacts={visibleContact} onDelete={deleteChooseContact} />
    </div>
  );
}

export default App;
