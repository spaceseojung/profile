import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = isScrolled ? 60 : 80;
      const targetPosition = section.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header header-scroll ${isScrolled ? 'scrolled' : ''}`} data-testid="header-main">
      <div className="container header__container">
        <div className="header__logo-container">
          <a 
            href="#" 
            className="header__logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            data-testid="link-logo"
          >
            <span className="header__logo--thin">SPACE</span>{' '}
            <span className="header__logo--bold">SEOJUNG</span>
          </a>
        </div>
        <nav className="header__nav" data-testid="nav-main">
          <ul className="header__nav-list">

            <li>
              <a 
                href="#company" 
                className="header__nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('company');
                }}
                data-testid="link-nav-company"
              >
                회사 소개
              </a>
            </li>

            <li>
              <a 
                href="#projects" 
                className="header__nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('projects');
                }}
                data-testid="link-nav-projects"
              >
                주요 시공 경력
              </a>
            </li>

            <li>
              <a 
                href="#ceo" 
                className="header__nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('ceo');
                }}
                data-testid="link-nav-ceo"
              >
                대표이사 소개
              </a>
            </li>

            <li>
              <a 
                href="#processes" 
                className="header__nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('processes');
                }}
                data-testid="link-nav-processes"
              >
                세부 공정
              </a>
            </li>
            <li>
              <a 
                href="#categories" 
                className="header__nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('categories');
                }}
                data-testid="link-nav-categories"
              >
                시공
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="header__nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                data-testid="link-nav-contact"
              >
                연락처
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
