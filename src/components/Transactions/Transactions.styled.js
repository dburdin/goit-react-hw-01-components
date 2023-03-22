import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #eeeeee;
  box-shadow: 5px 3px 3px #eeeeee;
  font-size: 20px;
`;
export const TableHead = styled.thead`
  background-color: aliceblue;
`;
export const TableBody = styled.tbody`
  background-color: #eeeeee;
`;
export const TableRow = styled.tr`
  font-weight: 300;
  font-size: 18px;
  /* background-color: ${({ type }) => {
    if (type === 'deposit') {
      return '#069869';
    } else if (type === 'withdrawal') {
      return '#fd5532';
    } else if (type === 'payment') {
      return '#c7eed4';
    } else {
      return '#ffe599';
    }
  }}; */

  background-color: ${({ type }) => {
    if (type === 'deposit') return '#069869';
    else if (type === 'withdrawal') return '#fd5532';
    else if (type === 'payment') return '#c7eed4';
    else return '#ffe599';
  }};
`;
export const TableRowHead = styled.tr`
background-color: background-color: aliceblue;;
`;
