import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Log In / Sign Up</Link>
      <Link to="/PostsDisplay">Posts Display</Link>
    </div>
  );
}
