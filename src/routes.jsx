import { Routes, Route, useNavigate} from 'react-router-dom';
import { MainPage } from './pages/main';
import { Categories } from './pages/categories';
import { Favorities } from './pages/favorities';
import { Login } from './pages/login';
import { Registration } from './pages/register';
import { NotFound } from './pages/404';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useState } from 'react';

export const AppRoutes = () => {
    const [user, setUser] = useState( window.localStorage.getItem("user"));
    const navigate = useNavigate();
    const handleLogin = () => {
        window.localStorage.setItem("user",{login: ""});
        setUser( window.localStorage.getItem("user"));
        navigate("/", {replace: true}); 
    }
    const handleLogout = () => {
        window.localStorage.removeItem("user");
        setUser(null);
    };
    const isAuthorized = user !== null;
    console.log(isAuthorized);

    return (
        <Routes>
            <Route element= {<ProtectedRoute isAllowed={Boolean(isAuthorized)} redirectPath="/login"/>}>
                <Route path="/" element= {<MainPage user={user} onAuthButtonClick={isAuthorized ? handleLogout : handleLogin}/>}/>
                <Route path="/categories/:id" element= {<Categories/>}/>
                <Route path="/favorities" element= {<Favorities/>}/>
            </Route>
            <Route path="/login" element= {<Login onAuthButtonClick={handleLogin}/>}/>
            <Route path="/registration" element= {<Registration/>}/>
            <Route path="*" element= {<NotFound/>}/>
        </Routes>
    );
};