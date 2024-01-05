import styled from "styled-components";

export const NavBar = styled.nav`

display: flex;
    align-items: center;
    padding: 2% 3%;
    height: 20px;
    background-color: whitesmoke;
    font-family: 'DM Mono', monospace;
    box-shadow: 1px 5px 10px 5px rgb(175, 174, 174);


    @media (max-width: 425px) {
      height: 35px;
    }
`

export const NavLogo = styled.img`
  width: 100px;
`
