import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileInfo,
  ProfileImage,
  ProfileName,
  ProfileLink,
  ProfileLocation,
  ProfileStats,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileInfo>
        <ProfileImage src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileLink href={avatar}>@{tag}</ProfileLink>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileInfo>
      <ProfileStats>
        <StatsItem>
          <b>Followers:</b>
          <p>{followers}</p>
        </StatsItem>
        <StatsItem>
          <b>Views:</b>
          <p>{views}</p>
        </StatsItem>
        <StatsItem>
          <b>Likes:</b>
          <p>{likes}</p>
        </StatsItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
