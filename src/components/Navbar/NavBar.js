import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white" >
      <div className="container ">
        <Link className="navbar-brand my-4 w-100 text-center" to="/" style={{letterSpacing: "1px"}}>
          <h2 className="font-weight-bold">ScaR Gaming Cafe</h2>
        </Link>
      </div>
    </nav>
  );
}
