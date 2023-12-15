import * as S from './SidebarUserInfo.styles';

export default function SidebarUserInfo() {
    return (
        <S.SidebarPersonal>
              <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
              <S.SidebarIcon>
                <svg alt="logout">
                  <use xlinkHref ="img/icon/sprite.svg#logout"></use>
                </svg>
              </S.SidebarIcon>
            </S.SidebarPersonal>
    );
}

 