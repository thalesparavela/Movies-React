import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding-left: 124px;
  padding-right: 124px;
  height: 116px;
  gap: 64px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
  > h1 {
    justify-content: start;
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
    display: flex;
    width: 198px;
    align-items: center;
    justify-content: flex-end;
    gap: 9px;
    > div {
      width: 198px;
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
