import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StatusProvider } from "./context/StatusContext.js";
import { VerificationProvider } from "./context/VerificationContext.js";
import { UploadProvider } from "./context/UploadContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StatusProvider>
      <VerificationProvider>
        <UploadProvider>
          <App />
        </UploadProvider>
      </VerificationProvider>
    </StatusProvider>
  </React.StrictMode>
);
