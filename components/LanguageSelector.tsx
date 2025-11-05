"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "../i18n";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";

const languageNames = {
  de: "Deutsch",
  en: "English",
  hu: "Magyar",
};

const languageFlags = {
  de: "🇩🇪",
  en: "🇬🇧",
  hu: "🇭🇺",
};

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extract locale from pathname
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale =
    segments.length > 0 && locales.includes(segments[0] as any)
      ? segments[0]
      : "de";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false);

    // Remove the current locale from the pathname
    // pathname looks like: /de/thank-you or /de
    const segments = pathname.split("/").filter(Boolean);

    // Remove the first segment (current locale)
    if (segments.length > 0 && locales.includes(segments[0] as any)) {
      segments.shift();
    }

    // Build new path with new locale
    const pathWithoutLocale =
      segments.length > 0 ? `/${segments.join("/")}` : "";
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-selector-button"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="language-selector-current">
          {languageNames[currentLocale as keyof typeof languageNames]}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="language-selector-dropdown">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`language-selector-option ${
                locale === currentLocale ? "active" : ""
              }`}
            >
              {languageNames[locale as keyof typeof languageNames]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
