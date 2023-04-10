import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
  "Brand header"
  "Menu Search"
  "Menu Content"
  "NewNote Content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`;
export const Brand = styled.div`

grid-area: Brand;
background-color: red;

`;
export const Search = styled.div`

grid-area: Search;
background-color: yellow;

`;
export const Content = styled.div`

grid-area: Content;
background-color: green;

`;
export const Menu = styled.ul`

grid-area: Menu;
background-color: blue;

`;
export const NewNote = styled.button`

grid-area: NewNote;
background-color: pink;

`;