import { FaInstagram } from "react-icons/fa";
import "./../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <span>Watch Store</span>
        <FaInstagram className="instagram" />
      </div>
    </>
  );
}
