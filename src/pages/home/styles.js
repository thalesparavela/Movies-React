import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  header {
    position: sticky;
    top: 0;
  }
  main {
    flex: 1;
    padding: 48px 124px;
    display: flex;
    flex-direction: column;
    gap: 38px;
    > div > h2 {
      font-size: 32px;
    }
    .movies {
      display: flex;
      flex-direction: column;
      gap: 24px;
      overflow-y: auto;
      max-height: 800px;
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .Button {
      display: flex;
      width: auto;
      align-items: center;
      gap: 8px;
      padding: 16px 32px;
    }
  }
`;
