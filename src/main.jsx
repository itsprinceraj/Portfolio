import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer
      theme="dark"
      autoClose={3000}
      draggable
      closeOnClick
      pauseOnHover
    />
    <App />
  </BrowserRouter>
);
