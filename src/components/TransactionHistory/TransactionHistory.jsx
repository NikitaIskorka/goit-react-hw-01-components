import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ TransactionData }) => {
  return (
    <table className={s.TransactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {TransactionData.map(({ amount, currency, type, id }) => {
          return (
            <TransactionItem
              key={id}
              amount={amount}
              currency={currency}
              type={type}
            />
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
