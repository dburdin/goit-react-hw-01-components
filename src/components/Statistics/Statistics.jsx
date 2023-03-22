import PropTypes from 'prop-types';

import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  ItemLabel,
} from './Statistics.styled';

export const Statistics = ({ data }) => {
  return (
    <StatisticsWrapper>
      <StatisticsTitle>Upload Stats</StatisticsTitle>
      <StatisticsList>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <ItemLabel>{label}</ItemLabel>
              <span>{percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
