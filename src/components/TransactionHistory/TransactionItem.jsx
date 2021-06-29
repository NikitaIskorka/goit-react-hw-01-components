import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={s.item}>{type}</td>
      <td className={s.item}>{amount}</td>
      <td className={s.item}>{currency}</td>
    </tr>
  );
};
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionItem;
