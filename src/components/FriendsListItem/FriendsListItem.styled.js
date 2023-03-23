import styled from 'styled-components';

export const FriendsCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  box-shadow: 5px 3px 3px #eeeeee;
  background-color: aliceblue;
  padding: 10px 0;
`;
export const IsOnline = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ online }) => {
    return online ? 'lime' : 'red';
  }};
`;
export const FriendsAvatar = styled.img`
  width: 70px;
`;
export const FriendsName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
