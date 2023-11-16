import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "./registerPage/registerPage";
import { LoginPage } from "./loginPage/loginPage";
import { Layout } from "./layout/layout";
import { HomePage } from "./homePage/homePage";
import { ContactsPage } from "./contactsPage/contactsPage";

// import { ContactForm } from './contactForm/contactForm';
// import { Filter } from './filter/filter';
// import { ContactList } from './contactList/contactList';
// import { Container, MainTitle, Title } from './app.styled/app.styled';

export const App = () => {

  return (
 
   
  <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/contacts' element={<ContactsPage/>} />
          </Route>
  </Routes>
     );
  }

//  <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/register"
//           element={<RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />}/>
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/tasks"
//           element={
//             <PrivateRoute redirectTo="/login" component={<TasksPage />} />
//           }
//         />
//       </Route>
//     </Routes>