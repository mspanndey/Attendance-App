import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./screens/homepage";
import Notification from "./screens/notificationScreen";
import Insights from "./screens/insightsScreen";
import Profile from "./screens/profileScreen";
import Attandance from "./screens/attandanceScreen";
import Calendar from "react-calendar";
import AdminRoute from "./component/adminRoute";
import LoginPage from "./screens/loginScreen";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="" element={<AdminRoute />}>
        <Route index={true} path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Insights" element={<Insights />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Attendance" element={<Attandance />} />
        <Route path="/Calender" element={<Calendar />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
