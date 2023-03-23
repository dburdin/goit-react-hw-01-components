import PropTypes from 'prop-types';

import { FriendsListWrapper } from './FriendsList.styled';
import { FreindsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListWrapper>
      {friends.map(friend => {
        return (
          <FreindsListItem friend={friend} key={friend.id}></FreindsListItem>
        );
      })}
    </FriendsListWrapper>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
