import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between">
        <h1 className="font-bold text-sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Urban</span>
          <span className="text-slate-700">Nest</span>
        </h1>

        <form>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
    </header>
  );
};

export default Header;
