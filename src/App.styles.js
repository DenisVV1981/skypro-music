
import styled from 'styled-components';


export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
background-color: #383838;
`
export const Container = styled.div`
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`
export const Main = styled.div`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
`
export const MainCenterblock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`
export const MainBlock = styled.div`
display: flex;
gap: 161px;
`
export const MainCenter = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;

`
export const MainCenterblockHeader = styled.div`
display: flex;
gap: 200px;
`

export const CenterblockH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`
export const MainSidebar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
`
export const Bar = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
background: rgba(28, 28, 28, 0.5);
`

export const BarContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
}
`
export const BarPlayProgressTimer = styled.div`
color: #696969;
text-align: right;
font-variant-numeric: lining-nums proportional-nums;

/* Desk • 1366/Caption S */
font-family: StratosSkyeng;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 112.5% */
letter-spacing: 0.016px;
`
export const BarPlayProgress = styled.div`
width: 100%;
height: 5px;
background: #2e2e2e;
`
export const BarPlayerBlock = styled.div`
height: 73px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
export const Footer = styled.footer``
