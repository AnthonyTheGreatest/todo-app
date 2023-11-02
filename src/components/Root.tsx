import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="bg-slate-200 h-screen w-screen flex flex-col justify-between">
      <Header />
      <main className="flex justify-center">
        <p>main element</p>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
