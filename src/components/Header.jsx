import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header style={{position: "sticky", top: "0", left: "0", padding: "30px 40px", backgroundColor: "#E27D60", color: "#fff"}}>
       <nav style={{display: "flex", justifyContent: "space-between", textDecoration: "none"}}>
          <NavLink style={{color: "#fff", fontSize: "20px"}} to="/usestate">useState</NavLink>
          <NavLink style={{color: "#fff", fontSize: "20px"}} to="/useeffect">useEffect</NavLink>
          <NavLink style={{color: "#fff", fontSize: "20px"}} to="/custom">Custom hooks</NavLink>
      </nav>
    </header>
  );
};