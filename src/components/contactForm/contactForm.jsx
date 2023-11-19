import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Label, Btn, Title, ErrMessage } from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';



const formSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.number().min(5, 'Too Short!')
    .required('This field is required!'),
})
export const ContactForm = () => { 
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();
 
     const addNewContact = value => {
    const newContact = contacts.find(
      el => el.name.toLowerCase() === value.name.toLowerCase()
    );
    if (newContact) return alert(newContact.name + ' is already in contacts.');
    value.id = nanoid();
       dispatch(addContact(value))
       
  }
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}  
 
    onSubmit={(values, actions) => {
      addNewContact(values)
      actions.resetForm();        
      }} 
    >
      <Form>
      <Label htmlFor="name"><Title>Name</Title>
          <Field name="name" placeholder="name" />
          <ErrMessage name="name" component="div" />
      </Label>
      <Label htmlFor="number"><Title>Number</Title>
          <Field type="tel" name="number" placeholder="tel" />
          <ErrMessage name="number" component="div" />
      </Label>
    <Btn  type="submit">Add contact</Btn>
      </Form>
    </Formik>)
};
    




