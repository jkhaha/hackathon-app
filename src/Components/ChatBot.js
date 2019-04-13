import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/chatBotTheme';
import Review from './Review'
import PropTypes from 'prop-types';
import steps from "../utils/chatBotVariables";




Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};


class ChatBox extends Component {
  render(){
    const { user } = this.props
    console.log(user);
    return(
      <ThemeProvider theme={theme}>
        <ChatBot width={"50"} steps={steps} />
      </ThemeProvider>
    )
  }
};

export default ChatBox;
