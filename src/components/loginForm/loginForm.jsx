import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Button, Form, Title, Label } from './loginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
   
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Title>Email</Title>
        <input type="email" name="email" />
      </Label>
      <Label>
        <Title>Password</Title>
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/authOperations';


// export const LoginPage = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form  onSubmit={handleSubmit} autoComplete="off">
//       <label >
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// };
