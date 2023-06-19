import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://pi-countries-back-dmol.onrender.com";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);