import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  padding: 32px;
  gap: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  > p {
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme.COLORS.GRAY_PH};
  }
  .stars {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    gap: 6px;
  }
  background-color: ${({ theme }) => theme.COLORS.PINK_BACKGROUND};

  border-radius: 16px;
`;
export const Tag = styled.div`
  display: flex;
  gap: 8px;

  > p {
    border-radius: 8px;
    padding: 6px 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`;
