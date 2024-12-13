
import Spinner from './Spinner';

import React, { Component } from 'react';

export const withDataLoader = (url) => (WrappedComponent) => {
  return class DataLoader extends Component {
    state = {
      data: null,
      isLoading: true,
      error: null,
    };

    componentDidMount() {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => this.setState({ data, isLoading: false }))
        .catch((error) => this.setState({ error, isLoading: false }));
    }

    render() {
      const { data, isLoading, error } = this.state;
      if (isLoading) {
        return <Spinner/>
      }
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      return <WrappedComponent {...this.props} data={data} />;
    }
  };
};



