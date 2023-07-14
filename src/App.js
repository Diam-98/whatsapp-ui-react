import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="sections">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
