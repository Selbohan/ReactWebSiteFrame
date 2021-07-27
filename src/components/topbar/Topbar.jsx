import "./Topbar.scss";
import { LinkedIn, Mail,Home } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Home href="#intro" className="logo"/>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span>furkanhyavuz</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>furkanhyavuz@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}