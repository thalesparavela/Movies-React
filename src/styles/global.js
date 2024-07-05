import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
  scroll-behavior: smooth;

}
#root{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
body{

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color:${({ theme }) => theme.COLORS.WHITE};
  -webkit-font-smoothing: antialiased;
}
body, input, button, textarea{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none

}

a {
  text-decoration: none;
}
button, a{
  cursor: pointer;
  transition: filter 0.2s;
}
button:hover, a:hover{
  filter: brightness(.9)
}
`;
