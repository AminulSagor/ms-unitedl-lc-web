"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="main-nav" aria-label="Primary">
      {navItems.map(({ href, label }) => {
        const isActive =
          pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

        const classes = ["nav-link"];
        if (isActive) {
          classes.push("nav-link--active");
        }

        return (
          <Link
            key={href}
            href={href}
            className={classes.join(" ")}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
