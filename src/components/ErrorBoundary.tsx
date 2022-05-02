import React from "react";

class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error boundary alert!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;