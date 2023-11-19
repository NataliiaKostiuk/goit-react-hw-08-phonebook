import { NavItem, Nav } from './authmenu.styled';


export const AuthNavigation = () => {
	return (
		<>
			<Nav>
		    <NavItem to={'/'}></NavItem>		
           <NavItem to={'/register'}>Registatoin</NavItem>
            <NavItem to={'/login'}>Login</NavItem>
			</Nav>
		</>
	);
};