// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from "./main/home/Home";
import Pages from "./components/pages/Pages";
import NotFound from './widget/NotFound';
import { AppProvider, useAppContext } from "./api/appContext";
import MainPages from "./main/dashboard/MainPages";
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/group/*" element={<Pages />} />
            <Route path="/dashboard/*" element={<PrivateRoute />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

function PrivateRoute() {
  const { user, token, removeUserFromLocalStorage } = useAppContext();
  if (user && token) {
    const decodedToken = jwtDecode(token);
    const tokenExp = new Date(decodedToken.exp * 1000);
    const now = new Date();
    const twelveHoursLater = new Date(now.getTime());
    if (tokenExp < twelveHoursLater) { removeUserFromLocalStorage(); return <Pages />; } else { return <MainPages />; }
  } else {
    return <Pages />;
  }
}

export default App;
