import styled from "styled-components";
import { colors } from "../../theme/constants";

export const Card = styled.div`
    width: 189px;
    height: 204px;
    text-align: center;
    margin-right: 9px;
    margin-top: 48px;

`
export const Image = styled.img`
    width: 127px;
    height: 157px;
`
export const ContainerTop =styled.div`
    margin-top: 6px;
    margin-left: 22px;
    display: flex;
    text-align: center;
    justify-content: space-between;

`
export const ContainerMiddle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    /* margin-left: 30px; */
`
export const ContainerBottom = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
`

export const Counter = styled.span`
    width: 44px;
    height: 49px;
    background-color: ${colors.roxo};
    color: #ffffff;
    font-size: 32px;
    font-weight: 400;
    border: 1px solid #6950A1;
    border-radius: 9px;
    margin-right: 40px;
    
`

export const Valor = styled.div`
    display: flex;
    justify-content: center;

`
