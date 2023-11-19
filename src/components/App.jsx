import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/layout";
import { RestrictedRoute } from "./restrictedRoute";
import { PrivateRoute } from "./privateRoute";
import { useAuth } from "./hook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import { refreshUser } from "redux/auth/authOperations";
import { resetError } from "redux/auth/authSlise";
import { toast } from 'react-hot-toast';
import { statusUserError } from "redux/auth/authSelectors";

 const HomePage = lazy(() => import('../pages/homePage/homePage'));
const RegisterPage = lazy(() => import('../pages/registerPage'));
 const LoginPage = lazy(() => import('../pages/loginPage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/contactsPage'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const errorUser = useSelector(statusUserError);

   useEffect(() => {
    dispatch(refreshUser());
   }, [dispatch]);
  
  	useEffect(() => {
		if (errorUser !== null && errorUser !== 'Unable to fetch user') toast(`${errorUser}`);
		dispatch(resetError());
	}, [dispatch, errorUser]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) :  (   
  <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register'  element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        <Route path='/login' element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage/>} />}/>
        <Route path='/contacts' element={ <PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          </Route>
  </Routes>
     );
  }

