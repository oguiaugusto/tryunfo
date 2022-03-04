import React from 'react';
import Provider from './Provider';
import { Form } from './components';

export default function App() {
  return (
    <Provider>
      <Form />
    </Provider>
  );
}
