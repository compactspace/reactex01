import react from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import fnc1 from '../ex01/App';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <fnc1 />
  </React.StrictMode>
)
reportWebVitals();