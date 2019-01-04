import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, errorMessage: error });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);

  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong</h1>
          <h2>Error Message</h2>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
