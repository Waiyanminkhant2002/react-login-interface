import React, { useState } from 'react';
import AuthPanel from './components/AuthPanel';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const togglePanel = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="app">
      <AuthPanel isLogin={isLogin} togglePanel={togglePanel} />
    </div>
  );
};

export default App;
