import styled from 'styled-components';

export const BarPlayer = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
export const PlayerControls = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
padding: 0 27px 0 31px;
`
export const PlayerTrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
`

export const TrackPlayContain = styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author""image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`

export const PlayerButton = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;

`

export const PlayerButtonPrev = styled(PlayerButton)`
margin-right: 23px;
`
export const PlayerButtonPlay = styled(PlayerButton)`
cursor: pointer;
margin-right: 23px;
`
export const PlayerButtonNext = styled(PlayerButton)`
margin-right: 28px;
fill: #a53939;
`
export const PlayerButtonHoverActive = styled(PlayerButton)`
  
&:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}


&:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}

&:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

&:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}

&:active .track-play__like-svg,
&:active .track-play__dislike-svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}
`

export const PlayerButtonRepeat = styled(PlayerButtonHoverActive)`
margin-right: 24px;
`

export const PlayerButtonShuffle = styled(PlayerButtonHoverActive)`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`

export const PreviosSvg = styled.svg`
width: 15px;
height: 14px;
`
export const PlaySvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
`
export const NextSvg = styled.svg`
width: 15px;
height: 14px;
fill: inherit;
stroke: #d9d9d9;
`

export const RepeatSvg = styled.svg`
width: 18px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const ShuffleSvg = styled.svg`
width: 19px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const TrackPlayImg = styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 12px;
-ms-grid-row: 1;
-ms-grid-row-span: 2;
-ms-grid-column: 1;
grid-area: image;
`
export const TrackPlaySvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`
export const TrackPlayAuthor = styled.div`
-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
`
export const TrackPlayAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
white-space: nowrap;
`
export const TrackPlayAlbum = styled.div`
-ms-grid-row: 2;
-ms-grid-column: 2;
grid-area: album;
min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #ffffff;
`

export const TrackPlayLikeDis = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-left: 26%;
`


export const TrackPlayLike = styled(PlayerButtonHoverActive)`
padding: 5px;
`

export const TrackPlayDislike = styled(PlayerButtonHoverActive)`
padding: 5px;
margin-left: 28.5px;
`
export const TrackPlayLikeSvg = styled.svg`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const TrackPlayDislikeSvg = styled.svg`
width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
  `
