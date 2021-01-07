import { moviesApi } from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: null,
      upcoming: null,
      popular: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const { data: { results: nowPlaying } } = await moviesApi.nowPlaying();
      const { data: { results: upcoming } } = await moviesApi.upcoming();
      const { data: { results: popular } } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    //   throw Error(); => await을 사용함으로 promise 에러 통제 가능
    } catch {
      this.setState({ error: "[1]: Can't load api data" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      nowPlaying, upcoming, popular, error, loading,
    } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
