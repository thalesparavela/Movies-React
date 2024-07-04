import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  padding-left: 123px;
  padding-right: 123px;
  height: 116px;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 64px;
  justify-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
  > h1 {

    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
  h2 {
    font-size: 14px;
  }
  button {
    color: ${({ theme }) => theme.COLORS.GRAY_PH};
  }

  .profile {
    width: 198px;
    display: flex;
    align-items: center;
    gap: 9px;
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    > img {
      width: 64px;
      height: 64px;
      border-radius: 100%;
    }
  }
`;
