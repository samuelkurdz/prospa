import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Safe } from "../assets/safe.svg";


type SidebarProps = {
  signup?: boolean;
}
function Sidebar({ signup }: SidebarProps) {
  return (
    <aside className={`${signup ? 'bg-signup' : 'bg-secondary'} h-screen text-white p-8 flex flex-col`}>
      <div className="space-y-14 mb-14">
        <Logo fill="white" />
        <div className="flex gap-1.5">
          <span className="w-full h-0.5 rounded-sm bg-white"></span>
          <span className="w-full h-0.5 rounded-sm bg-white mix-blend-soft-light"></span>
          <span className="w-full h-0.5 rounded-sm bg-white mix-blend-soft-light"></span>
          <span className="w-full h-0.5 rounded-sm bg-white mix-blend-soft-light"></span>
          <span className="w-full h-0.5 rounded-sm bg-white mix-blend-soft-light"></span>
        </div>
      </div>
      <div className="grow flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-3xl">
            Create multiple <br /> sub-account
          </h3>
          <p>
            Organise your business finances easily <br />
            with multiple accounts. No limits!
          </p>
        </div>

        <Safe width="100%" />

        <p>&copy; 2020 Prospa Inc</p>
      </div>
    </aside>
  );
}

export default Sidebar;