import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: {
        push,
      },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      push('/');
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        this.setState({ result });
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        this.setState({ result });
      }
    } catch {
      this.setState({ error: "[4] Can't find detail" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.state);
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        error={error}
      />
    );
  }
}

export default DetailContainer;
