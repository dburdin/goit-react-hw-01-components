import PropTypes from 'prop-types';
import {
  FriendsCard,
  IsOnline,
  FriendsAvatar,
  FriendsName,
} from './FriendsListItem.styled';

export const FreindsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendsCard>
      <IsOnline online={isOnline} />
      <FriendsAvatar src={avatar} alt={name} />
      <FriendsName>{name}</FriendsName>
    </FriendsCard>
  );
};

FreindsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
