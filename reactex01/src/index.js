import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import StartRouter from '../src/router/router';
import StartRouter2 from '../src/router/router2'
import reportWebVitals from './reportWebVitals';

// import { UseEffectFnc } from './syntax/useeffect/ex01';
// import {Ex02} from '../src/syntax/useeffect/ex02'

{/* <StartRouter2  /> */}

const root = ReactDOM.createRoot(document.getElementById('root'));
{/* <StartRouter /> */}
root.render(
<>
<React.StrictMode></React.StrictMode>
<StartRouter2  />
</>
);



reportWebVitals();
