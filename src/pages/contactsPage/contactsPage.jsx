import { Container, MainTitle, Title } from './contactPage.styled';
import { ContactForm } from '../../components/contactForm/contactForm';
import { Filter } from '../../components/filter/filter';
import { ContactList } from '../../components/contactList/contactList';
import { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { resetError } from 'redux/auth/authSlise';
import { statusUserError } from 'redux/auth/authSelectors';
import { toast } from 'react-hot-toast';


export default function ContactsPage() {
  const error = useSelector(statusUserError);
	const dispatch = useDispatch();

	useEffect(() => {
		if (error !== null) toast(`Error loading contacts: ${error}`);
		dispatch(resetError());
	}, [dispatch, error]);

    return (
        <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter  />
        <ContactList/>
      </Container> 
    )
}