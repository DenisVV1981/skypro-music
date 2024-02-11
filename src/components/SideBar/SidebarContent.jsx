import { useGetMainTracksQuery } from '../../services/playerAPI';
import * as S from './SidebarContent.styles';

export default function SidebarContent() {

  const { isLoading} = useGetMainTracksQuery();

    return ( <div>

{isLoading && (
        <S.SidebarBlock>
          <S.SideBarList>
            <S.SidebarItemSceleton>
            </S.SidebarItemSceleton>
            <S.SidebarItemSceleton>
            </S.SidebarItemSceleton>
            <S.SidebarItemSceleton>
            </S.SidebarItemSceleton>
          </S.SideBarList>
        </S.SidebarBlock>   
      )}

      {!isLoading && (
            <S.SidebarBlock>
              <S.SideBarList>
                <S.SidebarItem>
                  <S.SidebarLink to="/categories/1">
                    <S.SidebarImg
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                  <S.SidebarLink to="/categories/2">
                    <S.SidebarImg
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                  <S.SidebarLink to="/categories/3">
                    <S.SidebarImg
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
              </S.SideBarList>
            </S.SidebarBlock>
      )} 
    </div>   
    );
}