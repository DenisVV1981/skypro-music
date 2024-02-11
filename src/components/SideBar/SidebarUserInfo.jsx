import { UserContext } from '../Context/Context';
import * as S from './SidebarUserInfo.styles';

export default function SidebarUserInfo({ logout}) {
    return (
        <S.SidebarPersonal>
              <UserContext.Consumer>
               { (user) =>  <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName> }
              </UserContext.Consumer>
              <S.SidebarIcon onClick={logout}>
                <svg alt="logout">
                  <use xlinkHref ="/img/icon/sprite.svg#logout"></use>
                </svg>
              </S.SidebarIcon>
            </S.SidebarPersonal>
            
    );
}

 