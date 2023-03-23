import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { Transactions } from './Transactions/Transactions';

import user from '../json-data/user.json';
import data from '../json-data/data.json';
import friends from '../json-data/friends.json';
import transactions from '../json-data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} title="Upload Stats" />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
