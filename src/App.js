import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import user from './components/Profile/user.json';
import StatisticsData from './components/Statistics/statisticsData.json';
import Friends from './components/FriendList/FriendList.json';
import TransactionData from './components/TransactionHistory/TransactionHistory.json';

export default App;

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics StatisticsData={StatisticsData} />
      <FriendList friends={Friends} />
      <TransactionHistory TransactionData={TransactionData} />
    </div>
  );
}
