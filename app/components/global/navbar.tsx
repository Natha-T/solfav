import React from "react";
import Link from "next/link";
import { Route } from "next";
import Register from "../auth/register";
import Login from "../auth/login";
const navLink = [
  { href: "/home", label: "Home" },
  { href: "/companies/job-listing", label: "New" },
  { href: "/companies/create-job", label: "Solfav" },
  { href: "/my-profile", label: "My Profile" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <img src="../.." alt="" />
      </div>
      <div>
        <input
          className="ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          type="search"
          placeholder="Search..."
        />
      </div>
      <div>
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-6">
            {navLink.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href as Route} className="0">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-6">
        <Register />
        <Login />
      </div>
    </div>
  );
}
