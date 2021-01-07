import { tvApi } from 'api';
import React from 'react';
import TVPresenter from './TVPresenter';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      topRated: null,
      popular: null,
      airingToday: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const { data: { results: topRated } } = await tvApi.topRated();
      const { data: { results: popular } } = await tvApi.popular();
      const { data: { results: airingToday } } = await tvApi.airingToday();
      this.setState({
        topRated,
        popular,
        airingToday,
      });
    //   throw Error();
    } catch {
      this.setState({
        error: "[2] Can't load API data",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      topRated, popular, airingToday, error, loading,
    } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
