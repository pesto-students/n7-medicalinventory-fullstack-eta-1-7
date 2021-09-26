import React from "react";
import { withRouter } from "react-router-dom";

class ErrorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ hasError: false });
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <article className="page-error">
          <section>
            <h4>We’re sorry</h4>
            <p>
              Something went wrong with your request. Please try again later or
              contact us.
            </p>
          </section>
        </article>
      );
    }
    return this.props.children;
  }
}

const ErrorBoundary = withRouter(ErrorView);
export default ErrorBoundary;
