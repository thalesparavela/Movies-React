import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
  > div {
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin: auto;
    padding-left: 134px;
    padding-right: 134px;
  }
  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
    font-weight: bold;
  }
  p {
    color: ${({ theme }) => theme.COLORS.GRAY_H2};
    font-size: 14px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .login {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 42px;
  }
  img {
    flex: 1;
    size: cover;
    opacity: 0.5;
  }
`;
