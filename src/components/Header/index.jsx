import { useEffect, useState } from "react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [currentHash, setCurrentHash] = useState(
    window.location.hash || "#sobre"
  )

  const menuItems = [
    { label: 'Home', href: '#home'},
    { label: 'Sobre Mim', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash || "#sobre")
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <header className={`
    fixed top-0 left-0 w-full z-50
    pb-[20px] pt-[20px]
    transition-all duration-500

    bg-gradient-to-r from-[#ffffff] via-[#e0e0e0] to-[#c7c7c7]

    /* SOMBRA SÓ NO SCROLL OU MENU */
    ${menuOpen || scrolled
      ? 'shadow-[0_5px_35px_-4px_rgba(0,0,0,0.50)]'
      : 'shadow-none'}
  `}>
      <nav className="flex lg:w-[75%] w-[85%] mx-auto flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex justify-between items-center">
          <img
            src="/img/LogoNova.png"
            alt="Logo"
            className="lg:h-[74px] h-[65px] lg:h-full"
          />

          <div className="flex items-center gap-6 lg:hidden">
            {!menuOpen ? (
              <svg
                onClick={onToggleMenu}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-9 cursor-pointer"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                onClick={onToggleMenu}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-9 cursor-pointer"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        <div
          className={`
            overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out
            lg:static lg:block mt-[20px]
            ${menuOpen
              ? 'max-h-[300px] opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2'}
            lg:max-h-full lg:opacity-100 lg:translate-y-0
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-8 lg:gap-[4vw] py-6 md:py-0">
            {menuItems.map((item) => {
              const isActive = currentHash === item.href

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      relative inline-block w-max font-medium
                      transition-all duration-300 group
                      ${isActive
                        ? "font-bold bg-gradient-to-r from-[#0b0799] to-[#0d98c2] bg-clip-text text-transparent"
                        : "hover:font-bold hover:bg-gradient-to-r from-[#0b0799] to-[#0d98c2] hover:bg-clip-text hover:text-transparent"}
                    `}
                  >
                    <span>{item.label}</span>

                    <span
                      className={`
                        absolute -bottom-1 left-0 h-0.5
                        bg-primaryDark transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
