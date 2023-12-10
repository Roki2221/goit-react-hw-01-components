import Profile from './components/Profile/index';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#F4F4F4',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
        style={{ flexDirection: 'column' }}
      />
      <Statistics style={{ flexDirection: 'column' }} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
