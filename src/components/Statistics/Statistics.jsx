import PropTypes from 'prop-types';

import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  ItemLabel,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsWrapper>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
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
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
