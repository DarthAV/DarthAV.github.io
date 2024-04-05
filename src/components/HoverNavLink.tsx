import { Link, NavbarItem } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../utils/cn";

export const HoverNavLink = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "sm:flex py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <NavbarItem key={item}>
          <Link
            href={`#${item}`}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute z-10 inset-0 h-full w-full bg-primary block rounded-xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.2,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <p className="text-l text-black dark:text-white relative z-10">
              {item}
            </p>
          </Link>
        </NavbarItem>
      ))}
    </div>
  );
};
