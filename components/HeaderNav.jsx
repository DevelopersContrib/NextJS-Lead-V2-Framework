"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeaderNav({ domain, logo }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      // console.log("Scrolled:", scrolled);
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 ${isScrolled ? "tw-bg-black" : "tw-bg-transparent"}`}>
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-flex tw-h-16 tw-items-center tw-justify-between">
          <Link
            href="/"
            className="tw-flex tw-items-center tw-text-xl tw-font-bold tw-text-white"
          >
            <Image
              src={logo}
              alt={`${domain} Logo`}
              className="tw-h-auto tw-max-h-12 tw-mr-2"
              width={150}
              height={50}
            />
          </Link>

          <div className="tw-hidden md:tw-flex tw-items-center tw-gap-6">
            <Link
              href="https://contrib.com"
              className="tw-text-white hover:tw-text-gray-300 tw-no-underline tw-font-bold"
            >
              Contrib.com
            </Link>
            <Link
              href="/about"
              className="tw-text-white hover:tw-text-gray-300 tw-no-underline tw-font-bold"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="tw-text-white hover:tw-text-gray-300 tw-no-underline tw-font-bold"
            >
              Contact
            </Link>
            <Link
              href={`https://contrib.com/to/${domain}`}
              className="tw-text-white hover:tw-text-gray-300 tw-no-underline tw-font-bold"
            >
              Register
            </Link>
            <Link
              href={`https://domaindirectory.com/servicepage/?domain=${domain}`}
              className="tw-text-white hover:tw-text-gray-300 tw-no-underline tw-font-bold"
            >
              Partner
            </Link>
          </div>

          <button className="md:tw-hidden tw-text-white">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
