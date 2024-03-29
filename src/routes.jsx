import { Routes, Route, useNavigate} from 'react-router-dom';
import { MainPage } from './pages/main';
import { Categories } from './pages/categories';
import { Favorities } from './pages/favorities';
import { AuthPage } from './pages/login/AuthPage';
import { NotFound } from './pages/404';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UserContext } from './components/Context/Context';
import { Dashboard } from './components/Dashboard/Dashboard';
import { useDispatch } from 'react-redux';
import { addUserInfo } from './store/actions/creators/api';

export const AppRoutes = ({ setUser }) => {
    const dispatch = useDispatch();
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
        dispatch(addUserInfo(userData, newTokens));
        
        window.localStorage.setItem("user",JSON.stringify(userData));
        window.localStorage.setItem("userTokens",JSON.stringify(newTokens));
        setUser( JSON.parse(window.localStorage.getItem("user")));

        navigate("/", {replace: true}); 
    };
 
    return (
        <UserContext.Consumer>
            { (user) => 
                <Routes>
                    <Route element= {<ProtectedRoute isAllowed={Boolean(user !== null)} redirectPath="/login"/>}>
                        <Route path="/" element={<Dashboard logout={handleLogout}/>}>
                            <Route index element= {<MainPage />}/>
                            <Route path="/categories/:id" element= {<Categories/>}/>
                            <Route path="/favorities" element= {<Favorities/>}/>
                        </Route>
                    </Route>
                    <Route path="/login" element= {<AuthPage isLoginMode={true} redirectToRegister={handleRedirectToRegister} setTokensCallback={handleSetTokens}/>}/>
                    <Route path="/registration" element={<AuthPage isLoginMode={false} redirectToRegister={handleRedirectToLogin} setTokensCallback={handleSetTokens}/>}/>
                    <Route path="*" element= {<NotFound/>}/>
                </Routes>
            }
        </UserContext.Consumer>
    );
};