import PropTypes from 'prop-types';

import {
  FriendsListWrapper,
  FreindsListItem,
  IsOnline,
  FriendsAvatar,
  FriendsName,
} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListWrapper>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FreindsListItem key={id}>
            <IsOnline online={isOnline}></IsOnline>
            <FriendsAvatar src={avatar} alt={name} />
            <FriendsName>{name}</FriendsName>
          </FreindsListItem>
        );
      })}
    </FriendsListWrapper>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};
