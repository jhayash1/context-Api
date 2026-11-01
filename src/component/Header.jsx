import { useContext } from "react";
import CreateContext from "../contextApi/CreateContext";

function Header() {
  const data = useContext(CreateContext)
  return (
    <div className="links">
      <a href="">Home</a>
      <a href="">Categories</a>
      <a href="">About us</a>
    </div>
  );
}
export default Header;
