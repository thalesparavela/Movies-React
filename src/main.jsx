import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { FiMail } from 'react-icons/fi';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Button } from './components/button';
import { ButtonText } from './components/buttonText';
import { Input } from './components/input';

import { Header } from './components/header';
import { Card } from './components/card';
import { movies } from './mocks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </ThemeProvider>
  </React.StrictMode>,
);
