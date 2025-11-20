import Sidebar from "../components/sidebar.jsx";

export default function Landing({ user }) {
  const handleMenuSelect = (tab) => {
    console.log("Selected:", tab);
    // TODO: update main area based on tab
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(); // simple logout
  };

  return (
    <div className="flex">
      <Sidebar onSelect={handleMenuSelect} onLogout={handleLogout} />

      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold">Welcome, {user.name}</h2>
        <p className="text-gray-600 mt-2">Your tasks will appear here.</p>
      </div>
    </div>
  );
}
