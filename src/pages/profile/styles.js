import styled from 'styled-components';

export const Container = styled.div`
  header {
    width: 100%;
    height: 144px;
    display: flex;
    position: absolute;
    gap: 8px;
    align-items: center;
    padding-left: 144px;
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.PINK_BACKGROUND};
  }
`;
export const UserManagement = styled.div`
  width: 340px;

  display: flex;
  flex-direction: column;
  margin: 64px auto 0px;
  gap: 24px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 52px;
  label {
    position: relative;
  }
  img {
    border-radius: 100%;
    width: 184px;
    height: 184px;
  }
  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 48px;
    height: 48px;
    border-radius: 100%;
  }
`;
