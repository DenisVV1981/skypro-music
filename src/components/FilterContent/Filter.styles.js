import styled from 'styled-components';

export const FilterPanel= styled.div`
position: absolute;
display: inline-flex;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
border-radius: 12px;
background: #313131;
margin-top: 10px;
margin-left: -20px;
`

export const FilterList= styled.ul`
color: #FFF;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 28px;
overflow-y: auto;
height: 150px;
display: grid;
padding-right: 24px;
`

export const FilterButton = styled.div`
position: relative;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;

  &:hover{
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`

export const FilterCounter = styled.div`
position: absolute;
right: -8px;
top: -8px;
border-radius: 20px;
background-color: rgb(173, 97, 255);
width: 30px;
height: 30px;
align-items: center;
justify-content: center;
display: flex;
}
`

export const FilterTop = styled.div`
position: relative;

`

