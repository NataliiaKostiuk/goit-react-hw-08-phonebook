import styled from 'styled-components';

import { NavLink } from "react-router-dom";


export const NavItem = styled(NavLink)`
font-size: x-large;
text-decoration: none;
font-weight: 400;
color:#434455;
display: inline-block;
padding: 15px;
border-radius: 5px;
 &:hover {
    background-color: lightgray;
    color: blue;
  }`

export const Nav = styled.nav`

`