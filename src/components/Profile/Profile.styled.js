import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 500px;
  height: auto;
  margin: 20px auto;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  box-shadow: 5px 3px 3px #eeeeee;
  font-size: 20px;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
`;
export const ProfileImage = styled.img`
  height: 300px;
  width: 300px;
`;
export const ProfileName = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
export const ProfileLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  :hover,
  :focus {
    color: tomato;
  }
`;
export const ProfileLocation = styled.address`
  color: rgba(0, 0, 0, 0.6);
`;
export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: aliceblue;
`;
export const StatsItem = styled.li`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid;
  border-color: #dcdcdc;

  :not(:last-child) {
    border-right: 0;
  }
`;
