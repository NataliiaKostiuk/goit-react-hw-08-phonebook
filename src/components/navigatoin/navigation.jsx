import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
    
         <nav>
           <NavLink to={'/'}></NavLink>
           <NavLink to={'/register'}>registatoin</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/contacts'}>Contacts</NavLink>     
            </nav>

    
    )
}