import Governance from "./pages/Governance";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import React from "react";
import { ZilPayContextProvider } from "./components/ZilPayContext";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ]
  },
])

function App() {
  return (
    <div className="App">
      <ZilPayContextProvider>
        <RouterProvider router={router} />
      </ZilPayContextProvider>
    </div>
  );
}

export default App;
