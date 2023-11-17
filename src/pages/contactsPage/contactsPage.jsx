import { Container, MainTitle, Title } from './contactPage.styled';
import { ContactForm } from '../../components/contactForm/contactForm';
import { Filter } from '../../components/filter/filter';
import { ContactList } from '../../components/contactList/contactList';
export const ContactsPage = () => {
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