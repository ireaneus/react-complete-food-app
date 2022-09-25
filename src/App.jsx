import React, { Fragment } from 'react';
import Cart from './Cart/Cart';
import Header from './Layout/Header';
import { Meals } from './Meals/Meals';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;
