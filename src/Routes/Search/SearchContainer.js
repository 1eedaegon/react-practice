import React from 'react';
import { moviesApi, tvApi } from 'api';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      movieResults: null,
      tvResults: null,
      searchTerm: '',
      loading: true,
      error: null,
    };
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    try {
      const { searchTerm } = this.state;
      const { data: { results: movieResults } } = await moviesApi.search(searchTerm);
      const { data: { results: tvResults } } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
    //   throw Error();
    } catch {
      this.setState({
        error: "[3] Can't search by term",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      movieResults, tvResults, searchTerm, loading, error,
    } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
