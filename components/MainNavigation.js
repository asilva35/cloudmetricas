import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FullScreenMenu from './FullScreenMenu/FullScreenMenu';

export default function MainNavigation() {
  const animation = {
    hidden: { top: -100 },
    show: { top: 0 },
  };
  //DETERMINE IF WINDOW SCROLL IS AT TOP
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={isTop ? '' : 'scroled'}
      variants={animation}
      initial="hidden"
      animate="show"
    >
      <div className="container">
        <div className="top-header">
          <div className="main-logo">
            <Link href="/">
              <a>
                <Image
                  src="/assets/images/main-logo.png"
                  alt="Cloud Metricas Logo"
                  width={75}
                  height={75}
                ></Image>
              </a>
            </Link>
          </div>
          <div className="main-logo-text hide-lg hide-xl">
            <Link href="/">
              <a>
                <span>Cloud Metricas</span>
              </a>
            </Link>
          </div>
          <div className="main-nav hide-xs hide-sm hide-md">
            <ul>
              <li className="active">
                <a href="#about">Acerca</a>
              </li>
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#video02">Soporte</a>
              </li>
              <li>
                <a href="#contactus">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="signup-group hide-xs hide-sm hide-md">
            <ul>
              <li>
                <a href="#contactus" className="btn-main">
                  Demo Gratis
                </a>
              </li>
            </ul>
          </div>
          <div className="phone-link hide-lg hide-xl">
            <a href="tel:+51999999999">
              <div className="phone-icon-white">
                <Image
                  src="/assets/images/phone-icon.png"
                  alt="Phone Icon"
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div className="phone-icon-black">
                <Image
                  src="/assets/images/phone-icon-black.png"
                  alt="Phone Icon"
                  width={18}
                  height={18}
                ></Image>
              </div>
            </a>
          </div>
          <div className="hamburguer hide-lg hide-xl">
            <FullScreenMenu></FullScreenMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
