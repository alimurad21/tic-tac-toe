import { Link } from "react-router-dom";
import './NavLinks.css';

export default function NavLinks(){
    return (<ul className="nav-links">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/">News</Link>
    </li>
    <li>
      <Link to="/">Contact</Link>
    </li>
    <li>
      <Link to="/">About</Link>
    </li>
  </ul>);
}