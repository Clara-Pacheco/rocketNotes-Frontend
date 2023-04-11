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

display: flex;
justify-content: center;
align-items: center;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


> h1 {
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.ORANGE};

}

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

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

padding-top: 64px;
text-align: center;

> li {
  margin-bottom: 24px;
  
}

`;

export const NewNote = styled.button`

grid-area: NewNote;

background-color: ${({ theme }) => theme.COLORS.ORANGE};
border: none;

display: flex;
justify-content: center;
align-items: center;
gap: 8px;

> h1 {
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
}

> svg {
  font-size: 24px;
}

`;