import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';  
 import { Navigation } from 'components/navigatoin/navigation';
import { Container } from './layout.styled';
import { Toaster } from 'react-hot-toast';
export const Layout = () => {
    return (
        <Container>
            <Navigation />  
         <Toaster
containerStyle={{
    color: '#713200',
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  }}
/>
     <Suspense fallback={'LOADING PAGE...'}> 
        <Outlet />
     </Suspense> 
        </Container>
    )
    
}   