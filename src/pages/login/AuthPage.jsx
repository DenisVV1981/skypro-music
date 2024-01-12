import * as S from './AuthPage.styles';
import { useEffect, useState } from "react";
import {newUserRegistration, loginUser, getToken} from '../../api.js';

export const AuthPage = ({ isLoginMode = false , redirectToRegister, setTokensCallback}) => {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = async ({ email, password }) => {
    
    if(!email || !password) {
      setError("Заполните все поля");
      return;
    } 

    setIsProcessing(true);
    loginUser({
      email,
      password,
      callbackForResponse: (data) =>{
        setIsProcessing(false);

        if (data.error) {
          if (data.error.username){
            setError(data.error.username);
            return;
          }
          if (data.error.email){
            setError(data.error.email);
            return;
          }
          if (data.error.password){
            setError(data.error.password);
            return;
          }
        }
        if (data.errorMessage) {
            setError(data.errorMessage);
            return;
        }

        getToken({
          email,
          password
        })
        .then((tokens) => {
          console.log(tokens);
          setTokensCallback(data.data, tokens);
        });

      }
    });

  };

  const handleRegister = async () => {
    
    if(!email || !password || !repeatPassword) {
      setError("Заполните все поля");
      return;
    } 
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
        return;
    }   
    setIsProcessing(true);
    newUserRegistration({
      email,
      password,
      username: email,  
      callbackForResponse: (data) => {
        
        setIsProcessing(false);
        
        if (data.error) {
          if (data.error.username){
            setError(data.error.username);
            return;
          }
          if (data.error.email){
            setError(data.error.email);
            return;
          }
          if (data.error.password){
            setError(data.error.password);
            return;
          }
        }
        if (data.errorMessage) {
            setError(data.errorMessage);
            return;
        }

        getToken({
          email,
          password
        })
        .then((tokens) => {
          console.log(tokens);
          setTokensCallback(data.data, tokens);
        });

      }

    });

  };



  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        {/* <Link to="/login"> */}
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        {/* </Link> */}
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })} disabled={isProcessing}>
                Войти
              </S.PrimaryButton>
              {/* <Link to="/register"> */}
                <S.SecondaryButton onClick={redirectToRegister}>Зарегистрироваться</S.SecondaryButton>
              {/* </Link> */}
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister} disabled={isProcessing}>
                Зарегистрироваться
              </S.PrimaryButton>
              {/* <Link to="/register"> */}
                <S.SecondaryButton onClick={redirectToRegister} disabled={isProcessing}>
                  Войти
                </S.SecondaryButton>
              {/* </Link> */}
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}