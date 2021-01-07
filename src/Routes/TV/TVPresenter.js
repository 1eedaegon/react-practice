/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';

const Container = styled.div`
    padding: 0px 10px;
`;

const TVPresenter = ({
  topRated, popular, airingToday, error, loading,
}) => (loading ? <Loader /> : (
  <Container>
    {topRated && topRated.length > 0 && (
      <Section title="Top rated!">
        {topRated.map((show) => (
          <span key={show.id}>{show.name}</span>
        ))}
      </Section>
    )}
    {popular && popular.length > 0 && (
    <Section title="Popular">
      {popular.map((show) => (
        <span key={show.id}>{show.name}</span>
      ))}
    </Section>
    )}
    {airingToday && airingToday.length > 0 && (
    <Section title="Airing Today">
      {airingToday.map((show) => (
        <span key={show.id}>{show.name}</span>
      ))}
    </Section>
    )}
  </Container>
));

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
