import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: fit-content;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  box-shadow: 5px 3px 3px #eeeeee;
`;

export const StatisticsTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;
export const StatisticsList = styled.ul`
  display: flex;
  width: 500px;
  font-size: 25px;
  background-color: aliceblue;
`;
export const StatisticsItem = styled.li`
  height: 80px;
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
export const ItemLabel = styled.span`
  font-size: 17px;
`;
