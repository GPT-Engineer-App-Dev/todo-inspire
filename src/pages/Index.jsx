import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to TodoMaster</h1>
      <p>Get started by selecting a view from the sidebar.</p>
      <Link to="/inbox" className="text-blue-500 underline">
        Go to Inbox
      </Link>
    </div>
  );
};

export default Index;