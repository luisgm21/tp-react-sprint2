import { NavLink } from "react-router-dom";

const Navbar = ({ links = [] }) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-slate-800"
        >
          Mi App
        </NavLink>

        <div className="flex flex-1 items-center justify-end gap-2 overflow-x-auto whitespace-nowrap">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white/70 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar