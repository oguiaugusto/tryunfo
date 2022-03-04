import React from 'react';
import Provider from './Provider';
import { Form, Card } from './components';

export default function App() {
  return (
    <Provider>
      <Form />
      <Card formCard />
    </Provider>
  );
}
