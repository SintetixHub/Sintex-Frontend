import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-8 flex justify-between px-12 py-4">
      <span>Sintex</span>
      <div className="flex ">
        <NavLink href="/">Indíce</NavLink>
        <NavLink href="/login">Ingreso</NavLink>
        <NavLink href="/signup">Registro</NavLink>
      </div>
    </nav>
  )
}
