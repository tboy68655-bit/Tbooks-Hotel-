import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["/", "Home"], ["/about", "About"], ["/rooms", "Rooms"], ["/contact", "Contact"]];
  return (
    <header className="nav">
      <NavLink to="/" className="logo">TBook</NavLink>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "✕" : "☰"}</button>
      <nav className={open ? "links show" : "links"}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
      </nav>
    </header>
  );
}
