import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.backgroundDark};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
        height: 140px;
    }
`