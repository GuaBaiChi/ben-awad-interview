// 0:50 Make a counter
// 3:10 Fetch an API
// 14:10 Display the API data in UI components
// 22:06 Add a button to load more results
// 29:38 Bonus:  fix the linter's useEffect dependency array requirement

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import Question1 from "./Question1";
import Question2 from "./Question2"
import Question3 from "./Question3";
import Question4 from "./Question4";
import Bonus from "./Bonus"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Question1 />
    <Question2 />
    <Question3 />
    <Question4 />
    <Bonus />
  </React.StrictMode>
);
