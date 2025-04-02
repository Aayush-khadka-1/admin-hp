import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Technician from "./Technician_hp/Technician";
import Report from "./pages/Report";
import User from "./pages/User";
import Setting from "./pages/Setting";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Header />
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/technician" element={<Technician />} />
              <Route path="/reports" element={<Report />} />
              <Route path="/users" element={<User />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;