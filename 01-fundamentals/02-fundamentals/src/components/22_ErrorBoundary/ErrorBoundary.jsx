import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return <div className="bg-danger">{JSON.stringify(error.message)}</div>;
    }
    return this.props.children;
  }
}
