"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { usePathname } from "next/navigation";
// import { motion } from "motion/react"

export default function Navbar() {
  const pathname = usePathname();
  const [isActive, setActive] = useState("false");
  const [isDropdownActive, setDropdownActive] = useState(false);

  function setNavbarState(value) {
    setActive(value);

    if (value) {
      setDropdownActive(false);
    }
  }

  function handleToggle() {
    setNavbarState(!isActive);
  }

  function handleDropdownToggle() {
    setDropdownActive(!isDropdownActive);
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setNavbarState(true);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <nav className={`${styles.navbar} shadow-sm`}>
      <div className={`${styles.container} container mx-auto`} ref={wrapperRef}>
        <div className={styles.header}>
          <div>
            <Link href="/" className={styles.logo}>
              <Image src={logo} width="32" height="32" alt="Logo" />
              <p>Computer Programming</p>
            </Link>
          </div>
          <button
            className={styles.menuIcon}
            aria-label="Menu"
            onClick={handleToggle}
          >
            <Image
              src={isActive ? menu : close}
              width="32"
              height="32"
              alt="Menu"
            />
          </button>
        </div>
        <ul className={`${styles.links} ${isActive ? "" : styles.active}`}>
          <li>
            <Link
              href="/"
              className={`link ${pathname === "/" ? styles.active : ""}`}
            >
              Home
            </Link>
          </li>
          <li
            className={`
              ${styles.dropdown} 
              ${isDropdownActive && !isActive ? styles.dropdownActive : ""}
            `}
          >
            <a
              className={`${styles.dropdownTitle}`}
              onClick={handleDropdownToggle}
            >
              Languages
            </a>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/languages/scratch" className={`link ${pathname === "/languages/scratch" ? styles.active : ""}`}>Scratch</Link>
              </li>
              <li>
                <Link href="/languages/webdev" className={`link ${pathname === "/languages/webdev" ? styles.active : ""}`}>Web Development</Link>
              </li>
              <li>
                <Link href="/languages/python" className={`link ${pathname === "/languages/python" ? styles.active : ""}`}>Python</Link>
              </li>
            </ul>
          </li>
          <li className="bg-sky-900 text-white">
            <Link
              href="/contact"
              className={`link ${pathname === "/contact" ? styles.active : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
