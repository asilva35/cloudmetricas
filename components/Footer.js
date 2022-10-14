import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <section id="footer">
      <div className="container-full">
        <div className="row info">
          <div className="col-12 col-lg-4">
            <div className="logo-footer">
              <Image
                src="/assets/images/logo-footer.png"
                alt="Cloud Metricas"
                width={479}
                height={103}
              ></Image>
            </div>
            <div className="info-footer">
              <p>
                Este es un sitio web informativo sobre los servicios ofrecidos
                por Cloud Metricas.
              </p>
            </div>
            <div className="social-footer">
              <ul>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/assets/images/icon-facebook.png"
                      alt="Facebook"
                      width={58}
                      height={58}
                    ></Image>
                  </a>
                </li>
                <li className="hide">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/assets/images/icon-twitter.png"
                      alt="Twitter"
                      width={58}
                      height={58}
                    ></Image>
                  </a>
                </li>
                <li className="hide">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/assets/images/icon-youtube.png"
                      alt="Youtube"
                      width={58}
                      height={58}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/assets/images/icon-linkedin.png"
                      alt="Linkedin"
                      width={58}
                      height={58}
                    ></Image>
                  </a>
                </li>
                <li className="hide">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/assets/images/icon-instagram.png"
                      alt="Instagram"
                      width={58}
                      height={58}
                    ></Image>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2 hide-xs hide-sm hide-sm hide-md">
            <div className="menu-footer-01">
              <h4>Enlaces</h4>
              <ul>
                <li>
                  <a href="#home">Inicio</a>
                </li>
                <li>
                  <a href="#about">Acerca</a>
                </li>
                <li>
                  <a href="#services">Servicios</a>
                </li>
                <li>
                  <a href="#contactus">Contáctanos</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2 hide-xs hide-sm hide-sm hide-md">
            <div className="menu-footer-02">
              <h4>Servicios</h4>
              <ul>
                <li>
                  <a href="#services">Análisis</a>
                </li>
                <li>
                  <a href="#services">Seguimiento</a>
                </li>
                <li>
                  <a href="#services">Configuración</a>
                </li>
                <li>
                  <a href="#services">Asesoría</a>
                </li>
                <li>
                  <a href="#services">Soporte</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="menu-footer-03">
              <h4>Mantegamos el contácto</h4>
              <ul>
                <li>
                  <a href="#!">
                    <Image
                      src="/assets/images/icon-map.png"
                      alt="Map"
                      width={18}
                      height={18}
                    ></Image>
                    Calle # - Edf. AAA - Oficinas #123
                  </a>
                </li>
                <li>
                  <a href="tel:3001234567">
                    <Image
                      src="/assets/images/icon-phone.png"
                      alt="Phone"
                      width={18}
                      height={18}
                    ></Image>
                    300-123 45 67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@cloudmetricas.com">
                    <Image
                      src="/assets/images/icon-mail.png"
                      alt="Mail"
                      width={18}
                      height={18}
                    ></Image>
                    info@cloudmetricas.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-12">
            <h3>
              Cloud Metricas Website. All rights reserved. - &copy; 2022 by{' '}
              {/* eslint-disable-next-line react/jsx-no-target-blank*/}
              <a href="https://virtel.co" target="_blank">
                Virtel
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
