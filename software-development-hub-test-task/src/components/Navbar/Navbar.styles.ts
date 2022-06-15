import styled from "styled-components";

export const NavbarWrapper = styled.div`
  height: 60px;
  width: 100%;
  background: gainsboro;
  display: flex;
  justify-content: center;
`

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 35%;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const NavItem = styled.li`
  & > a {
    font-size: 16px;
    text-decoration: none;
    color: black;
  }
  
  & > [aria-current="page"] {
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    color: black;
  }
`

