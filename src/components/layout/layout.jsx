import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';  
 import { Navigation } from 'components/navigatoin/navigation';

export const Layout = () => {
    return (
        <header>
            <Navigation />  
  
     <Suspense fallback={'LOADING PAGE...'}> 
        <Outlet />
     </Suspense> 
        </header>
    )
    
}   