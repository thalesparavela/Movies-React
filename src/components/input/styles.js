import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 10px;
  > input {
    height: 56px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;
    border: 0;
    padding: 16px;
    &:placeholder {
      ${({ theme }) => theme.COLORS.GRAY_PH}
    }
  }
  > svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_PH};
  }
`;
