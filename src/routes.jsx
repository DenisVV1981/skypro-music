import { Routes, Route, useNavigate} from 'react-router-dom';
import { MainPage } from './pages/main';
import { Categories } from './pages/categories';
import { Favorities } from './pages/favorities';
import { AuthPage } from './pages/login/AuthPage';
import { NotFound } from './pages/404';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UserContext } from './components/Context/Context';


export const AppRoutes = ({ sceleton, setUser }) => {
    
    const navigate = useNavigate();
 
    const handleRedirectToRegister = () => {
        navigate("/registration", {replace: true}); 
     };
    const handleRedirectToLogin = () => {
        navigate("/login", {replace: true}); 
     };
 
    const handleLogout = () => {
        window.localStorage.removeItem("user");
        setUser(null);
    };

    const handleSetTokens = (userData, newTokens)=>{
        console.log(userData);
        console.log(newTokens);

        
        window.localStorage.setItem("user",JSON.stringify(userData));
        setUser( JSON.parse(window.localStorage.getItem("user")));
        navigate("/", {replace: true}); 
    };
 
    return (
        <UserContext.Consumer>
            { (user) => 
                <Routes>
                    <Route element= {<ProtectedRoute isAllowed={Boolean(user !== null)} redirectPath="/login"/>}>
                        <Route path="/" element= {<MainPage logout={handleLogout} sceleton={sceleton}/>}/>
                        <Route path="/categories/:id" element= {<Categories/>}/>
                        <Route path="/favorities" element= {<Favorities/>}/>
                    </Route>
                    <Route path="/login" element= {<AuthPage isLoginMode={true} redirectToRegister={handleRedirectToRegister} setTokensCallback={handleSetTokens}/>}/>
                    <Route path="/registration" element={<AuthPage isLoginMode={false} redirectToRegister={handleRedirectToLogin} setTokensCallback={handleSetTokens}/>}/>
                    <Route path="*" element= {<NotFound/>}/>
                </Routes>
            }
        </UserContext.Consumer>
    );
};