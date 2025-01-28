import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegistration from './pages/UserRegistration';
import SetupOrganization from './pages/SetupOrganization';
import ChatbotIntegration from './pages/ChatbotIntegration';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>BeyondChats - Chatbot Setup</h1>
        </header>
        <Routes>
          <Route path="/" element={<UserRegistration />} />
          <Route path="/setup-organization" element={<SetupOrganization />} />
          <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
