import * as S from './SidebarContent.styles';
import {useState, useEffect} from 'react';




export default function SidebarContent() {

  const [sceleton, setSceleton] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setSceleton(false);
    },  5000 );
  });

    return ( <div>

{sceleton && (
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

      {!sceleton && (
            <S.SidebarBlock>
              <S.SideBarList>
                <S.SidebarItem>
                  <S.SidebarLink href="#">
                    <S.SidebarImg
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                  <S.SidebarLink href="#">
                    <S.SidebarImg
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                  <S.SidebarLink href="#">
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