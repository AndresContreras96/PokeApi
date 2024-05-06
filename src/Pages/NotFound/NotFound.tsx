import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      400 Not Found
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;

