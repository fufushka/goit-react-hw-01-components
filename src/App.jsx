import { ProfileCard } from './components/ProfileCard/ProfileCard';
import user from './datas/ProfileData/user.json';
import data from './datas/Statistics/data.json';
import transactions from './datas/TransactionTable/transactions.json';
import { Statistics } from './components/Statistics/Statistics';
import { FriendsList } from './components/FriendsList/FriendsList';
import { Transactions } from './components/Transactions/Transactions';
import friends from './datas/FriendsData/friends.json';

export const App = () => {
  return (
    <>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};
