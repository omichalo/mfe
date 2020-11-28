import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header />
        <hr />
        <MarketingApp />
      </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
