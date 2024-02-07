import { getSelectionList, getSelectionTracks } from '../../api';
import * as S from './SidebarContent.styles';
import {useState, useEffect} from 'react';

export default function SidebarContent() {

  const [sceleton, setSceleton] = useState(true);

  const fetchData = async () => {

    try {
      const selections = await getSelectionList();
      
      console.log(selections);
      setSceleton(false);
      selections.forEach(async selection => {
        const selectionTracks  = await getSelectionTracks(selection.id);
        console.log(selectionTracks);
      });
    } catch (error) {
      console.log(error);
      setSceleton(false);
    }
    
  };

  // const isLike = useSelector(trackLikeSelector);
  useEffect(() => {
    console.log("загрузили selections");
    fetchData();
  }, [])

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