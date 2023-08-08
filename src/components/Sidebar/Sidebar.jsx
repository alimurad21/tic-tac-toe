import { Link } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar(){
    return(<ul className="side-links">
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