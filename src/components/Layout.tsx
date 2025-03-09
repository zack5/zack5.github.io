import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="content">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}