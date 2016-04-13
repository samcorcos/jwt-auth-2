import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser, fetchQuote, fetchSecretQuote } from '../actions';
import Login from '../components/login';
import Navbar from '../components/navbar';
// import Quotes from '../components/quotes';

class App extends Component {
  render() {
    const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props;
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
			
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool
};

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { quotes, auth } = state;
  const { quote, authenticated } = quotes;
  const { isAuthenticated, errorMessage } = auth;

  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  };
};


/*
<Quotes
	onQuoteClick={() => dispatch(fetchQuote())}
	onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
	isAuthenticated={isAuthenticated}
	quote={quote}
	isSecretQuote={isSecretQuote}
/>
*/

export default connect(mapStateToProps)(App);