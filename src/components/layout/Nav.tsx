import { navLinks, site } from "../../data/content";
import useScrollProgress from "../../hooks/useScrollProgress";
import { useEffect, useRef, useState } from "react";

const Nav = (): JSX.Element => {
  const { isScrolled } = useScrollProgress(60);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("nav-menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent | TouchEvent): void => {
      if (!isMenuOpen) return;

      const target = event.target as Node | null;
      if (!target) return;

      const clickedInsideMenu = menuRef.current?.contains(target);
      const clickedToggle = toggleRef.current?.contains(target);

      if (!clickedInsideMenu && !clickedToggle) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, {
      passive: true,
    });

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const handleToggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = (): void => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    handleCloseMenu();
    const lenis = (
      window as Window & {
        __lenis?: { scrollTo: (target: string, opts?: object) => void };
      }
    ).__lenis;
    if (lenis && href.startsWith("#")) {
      event.preventDefault();
      lenis.scrollTo(href, {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <header className={`site-nav ${isScrolled ? "is-scrolled" : "is-top"}`}>
      <nav className="site-shell site-nav__inner" aria-label="Main navigation">
        <a
          className="site-nav__brand"
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          {site.name}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="site-nav__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav-list"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M6.75 6.75a.75.75 0 0 1 1.06 0L12 10.94l4.19-4.19a.75.75 0 1 1 1.06 1.06L13.06 12l4.19 4.19a.75.75 0 0 1-1.06 1.06L12 13.06l-4.19 4.19a.75.75 0 0 1-1.06-1.06L10.94 12 6.75 7.81a.75.75 0 0 1 0-1.06Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M4.75 6.5h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5Zm0 4.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5Zm0 4.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>

        <button
          type="button"
          className={`site-nav__overlay${isMenuOpen ? " is-open" : ""}`}
          aria-label="Close menu overlay"
          onClick={handleCloseMenu}
          tabIndex={isMenuOpen ? 0 : -1}
        />

        <ul
          ref={menuRef}
          id="site-nav-list"
          className={`site-nav__list${isMenuOpen ? " is-open" : ""}`}
        >
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
