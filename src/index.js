import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from 'react-query';



const root = ReactDOM.createRoot(document.getElementById('root'));
let QueryxClient=new QueryClient();
root.render(
  <QueryClientProvider client={QueryxClient}>
<App />
  </QueryClientProvider>

    

);


