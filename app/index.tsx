import React, { useState } from "react";
import LoginScreen from "../components/LoginScreen";
import SplashScreen from "../components/SplashScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return <LoginScreen />;
}
