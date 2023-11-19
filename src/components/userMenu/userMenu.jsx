import { useDispatch } from "react-redux";
import { useAuth } from "components/hook";
import { logOut } from "redux/auth/authOperations";
import { NavItem, Btn, Container,Text, Wrapper } from "./userMenu.styled";

export const UserMenu = () => {
	const dispatch = useDispatch();
 	const { user } = useAuth();
    return (
        <Wrapper>
            <NavItem to={'/contacts'}>Contacts</NavItem> 
            < Container>
                <Text>Welcome {user.name}!!!</Text>
              <Btn type="button" onClick={() => dispatch(logOut())}>Logout</Btn>
            </ Container>
        </Wrapper>   
    )
}
