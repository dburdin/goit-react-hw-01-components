import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList';
import { Transactions } from './Transactions/Transactions';

import user from '../json-data/user.json';
import data from '../json-data/data.json';
import friends from '../json-data/friends.json';
import transactions from '../json-data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
