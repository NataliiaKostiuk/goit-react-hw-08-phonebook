import { Container, MainTitle, Title } from '../app.styled/app.styled';
import { ContactForm } from '../contactForm/contactForm';
import { Filter } from '../filter/filter';
import { ContactList } from '../contactList/contactList';
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