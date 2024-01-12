import * as S from './SidebarUserInfo.styles';

export default function SidebarUserInfo({user, logout}) {
    return (
        <S.SidebarPersonal>
              <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
              <S.SidebarIcon onClick={logout}>
                <svg alt="logout">
                  <use xlinkHref ="img/icon/sprite.svg#logout"></use>
                </svg>
              </S.SidebarIcon>
            </S.SidebarPersonal>
    );
}

 