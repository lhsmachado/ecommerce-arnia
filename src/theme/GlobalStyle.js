import { createGlobalStyle } from "styled-components"
import { colors } from "./constants"
export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Poppins', sans-serif;
        height: 842px;
        width: 595px;

    }

    h1{
        font-size: 40px;
        font-weight: 400;
        line-height: 60px;
        color: #000000;
        margin: 0;
    }

    h2{
        font-size: 32px;
        font-weight: 400;
        line-height: 48px;
        color: #ffffff;
    }

    h3{
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: #000000;
        text-transform: capitalize;
        margin: 0;
    }

    p{
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        color: #0A0909;
        margin: 0;
    }

    button{
        font-size: 20px;
        font-weight: 800;
        color: #ffffff;
        background-color: ${colors.roxo};
        border-radius: 9px;
        padding: 6px 16px;
        border: 1px solid ${colors.roxo};
    }

`