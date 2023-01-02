import Governance from "./pages/Governance";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import React from "react";
import TradePair from "./pages/TradePair";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const { Zilliqa } = require('@zilliqa-js/zilliqa');
const { BN, Long, units } = require('@zilliqa-js/util');

const {
  StatusType,
  MessageType,
} = require('@zilliqa-js/subscriptions');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "trade/",
        element: <Home />,
      },
      {
        path: "governance/",
        element: <Governance />
      },
      {
        path: "trade/buy/",
        element: <TradePair />
      },
      {
        path: "trade/sell/",
        element: <TradePair />
      }
    ]
  },
  
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
