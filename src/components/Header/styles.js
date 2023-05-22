import styled from "styled-components";
import { colors } from "../../theme/constants"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 150px;
    background-color: ${colors.roxo};
    height: 86px;
    width: 100%;
`
export const Image = styled.img`
    width: 128px;
    height: 38px;
`