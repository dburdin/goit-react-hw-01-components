import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableRowHead,
} from './Transactions.styled';

export const Transactions = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRowHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRowHead>
      </TableHead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <TableBody key={id}>
            <TableRow type={type}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          </TableBody>
        );
      })}
    </Table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
