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
  user: { username, tag, location, avatar, stats },
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
          <p>{stats.followers}</p>
        </StatsItem>
        <StatsItem>
          <b>Views:</b>
          <p>{stats.views}</p>
        </StatsItem>
        <StatsItem>
          <b>Likes:</b>
          <p>{stats.likes}</p>
        </StatsItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};
