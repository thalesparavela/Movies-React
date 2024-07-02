import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Button } from './components/button';
import { ButtonText } from './components/buttonText';
import { Input } from './components/input';
import { FiMail } from 'react-icons/fi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button title="Button" />
      <Input placeholder="Placeholder" icon={FiMail} />
      <Button title="Button" />
    </ThemeProvider>
  </React.StrictMode>,
);
