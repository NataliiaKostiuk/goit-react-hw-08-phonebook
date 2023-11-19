
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Button, Form, Title, Label } from './regisretForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Title> Username</Title>
        <input type="text" name="name" />
      </Label>
      <Label>
       <Title> Email</Title>
        <input type="email" name="email" />
      </Label>
      <Label>
       <Title> Password</Title>
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};

