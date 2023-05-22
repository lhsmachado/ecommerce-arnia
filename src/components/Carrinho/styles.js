import styled from "styled-components";
import { colors } from "../../theme/constants";

export const ContainerTop =styled.div`
    margin-top: 6px;
    margin-left: 22px;
    display: flex;
    text-align: center;
    justify-content: space-between;
`
export const ContainerMiddle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

`
export const Item = styled.div`
    display: flex;
    margin-top: 36px;
    margin-left: 25px;
    gap: 20px;
`
export const Button = styled.button`
    font-size: 32px;
    font-weight: 800px;
    line-height: 48px;
    width: 49px;
    /* height: 44px; */
    padding: 0;
    margin-right: 10px;
`
export const Image = styled.img`
    width: 127px;
    height: 157px;
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
export const Title = styled.span `
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #1C1818;
`

export const ContainerBottom = styled.div`
    margin-top: 25px;
    margin-bottom: 42px;
    padding-bottom: 25px;
    margin-left: 25px;
`