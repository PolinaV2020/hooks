import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header style={{position: "sticky", top: "0", left: "0", padding: "30px 40px", backgroundColor: "#E27D60", color: "#fff"}}>
       <nav style={{display: "flex", justifyContent: "space-between"}}>
          <NavLink to="/usestate">useState</NavLink>
          <NavLink to="/useeffect">useEffect</NavLink>
          <NavLink to="/custom">Custom hooks</NavLink>
      </nav>
    </header>
  );
};