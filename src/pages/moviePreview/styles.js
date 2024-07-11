import styled from 'styled-components';

export const Container = styled.div`
  main {
    height: 360px;
    overflow-y: auto;
    padding: 40px 124px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    > :first-child {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .link {
      align-items: center;
      display: flex;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    .info {
      display: flex;
      align-items: center;
      gap: 8px;
      > img {
        width: 16px;
        height: 16px;
        border-radius: 100%;
      }
      > :nth-child(3) {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
    .movie {
      display: flex;
      font-size: 36px;
      font-weight: 500;
      align-items: center;
      gap: 20px;
    }
    > p {
      font-size: 16px;
      text-align: justify;
    }
  }
`;
