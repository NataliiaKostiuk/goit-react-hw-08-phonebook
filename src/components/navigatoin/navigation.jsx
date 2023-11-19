import { useAuth } from "components/hook";
import { UserMenu } from "components/userMenu/userMenu";
import { AuthNavigation } from "components/authMenu/authMenu";
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
    return (
    
         <header>
         {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
         </header>

    
    )
}

