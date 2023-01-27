import React, { useReducer } from 'react';
import reducer from './reducer';
import { useQuery, QueryFunctionContext } from '@tanstack/react-query';

import './App.css';

export type APIproducts = {
  id: string;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}[];

const initialState: APIproducts = [
  {
    id: '',
    title: '',
    price: 0,
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  },
];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div className="App">const</div>;
}

export default App;
