import React from "react";
import { NavbarItem } from "./navbaritem";

export const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-500 bg-amber-100 text-sm lg:text-md p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};
