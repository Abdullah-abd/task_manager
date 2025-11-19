import { useEffect, useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/login.jsx";

function App() {
  const [user, setUser] = useState(null);

  // Load user from storage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user:", error);
      }
    }
  }, []);

  return (
    <>
      {!user ? (
        <Login onLoginSuccess={(userData) => setUser(userData)} />
      ) : (
        <Landing user={user} />
      )}
    </>
  );
}

export default App;
