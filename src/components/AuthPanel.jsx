import React, { useState, useEffect } from "react";
import "./AuthPanel.css";

const AuthPanel = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false); // Track bounce animation

  const togglePanel = () => {
    setIsLogin((prev) => !prev);
    setIsBouncing(true); // Trigger bounce animation
  };

  // Remove the bounce class after animation ends
  useEffect(() => {
    if (isBouncing) {
      const timer = setTimeout(() => {
        setIsBouncing(false);
      }, 600); // Match the bounce animation duration (600ms)
      return () => clearTimeout(timer);
    }
  }, [isBouncing]);

  return (
    <div className="auth-container">
      <div
        className={`panel-container ${
          isLogin ? "left-active" : "right-active"
        } ${isBouncing ? "bounce" : ""}`}
      >
        {/* RED PANEL */}
        <div className="panel red-panel">
          <h2>{isLogin ? "Welcome Back!" : "Hello Friend!"}</h2>
          <p>
            {isLogin ? (
              <>
                If you don't have an account,{" "}
                <span onClick={togglePanel}>Create Here</span>
              </>
            ) : (
              <>
                If you've already got an account,{" "}
                <span onClick={togglePanel}>Log in Here</span>
              </>
            )}
          </p>
        </div>

        {/* WHITE PANEL */}
        <div className="panel white-panel">
          {isLogin ? (
            <>
              <h2>Log In</h2>
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Log In</button>
              </form>
            </>
          ) : (
            <>
              <h2>Create Account</h2>
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPanel;
