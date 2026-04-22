"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7B44] focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const styles =
    variant === "primary"
      ? "bg-[#1B7B44] text-white hover:bg-[#16643A]"
      : "bg-white text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-50";

  const href = props.href?.toString() ?? "";
  const isHashLink = href.startsWith("#");

  if (isHashLink) {
    return (
      <a
        className={`${base} ${styles} ${className}`}
        href={href}
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();

          const id = href.slice(1);
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });

          // Keep URL in sync without relying on hash navigation.
          if (window.location.hash !== href) {
            window.history.pushState(null, "", href);
          }
        }}
      >
        {props.children}
      </a>
    );
  }

  return <Link className={`${base} ${styles} ${className}`} {...props} />;
}

