import Image from 'next/image';
import React from 'react';
import { motion, useCycle } from 'framer-motion';
import MotionSweepUp from './MotionSweepUp';

export default function Services() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const animation = {
    open: {
      transform: `translate(0,0)`,
      transition: {
        delay: 0,
        type: 'spring',
        stiffness: 400,
      },
    },
    close: {
      transform: `translate(-100%,0)`,
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const __toggleOpen = (opt) => {
    toggleOpen(opt);
  };
  return (
    <section id="services">
      <motion.div
        className="__services_menu hide-lg hide-xl"
        animate={isOpen ? 'open' : 'close'}
        variants={animation}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="__header">
                <div className="__back" onClick={__toggleOpen}>
                  <div className="__icon">
                    <Image
                      src="/assets/images/arrowleft-icon.png"
                      alt="Arrow Left"
                      width={24}
                      height={24}
                    ></Image>
                  </div>
                  <div className="__text">Servicios</div>
                </div>
              </div>
              <div className="__content">
                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/procesos-icon-blue.png"
                        alt="Icono de procesos"
                        width={30}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Procesos</h3>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/seguridad-icon-blue.png"
                        alt="Icono de seguridad"
                        width={28}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Seguridad</h3>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/analisis-icon-blue.png"
                        alt="Icono de analisis"
                        width={34}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Análisis</h3>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/capacidad-icon-blue.png"
                        alt="Icono de capacidad"
                        width={30}
                        height={23}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Capacidad</h3>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/entorno-icon-blue.png"
                        alt="Icono de entorno"
                        width={16}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Entorno</h3>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/conectividad-icon-blue.png"
                        alt="Icono de conectividad"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Conectividad</h3>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/visualizacion-icon-blue.png?v=0.1"
                        alt="Icono de visualizacion"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Visualización</h3>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/energia-icon-blue.png"
                        alt="Icono de energia"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Energía</h3>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">
              Conoce <b>todo</b> lo que <b>tenemos</b>{' '}
              <br className="hide-sm hide-md hide-lg hide-xl" />
              para ti
            </h2>
          </div>
        </div>
        <div className="row __sercices-items-row">
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp className="__service-item-icon noselect" delay={0}>
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/procesos-icon-blue.png"
                    alt="Icono de procesos"
                    width={30}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/procesos-icon-white.png"
                    alt="Icono de procesos"
                    width={30}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={0}>
                <h3>Procesos</h3>
                <p className="hide-xs hide-sm hide-md">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </MotionSweepUp>
            </div>
          </div>
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp
                className="__service-item-icon noselect"
                delay={0.2}
              >
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/seguridad-icon-blue.png"
                    alt="Icono de seguridad"
                    width={28}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/seguridad-icon-white.png"
                    alt="Icono de seguridad"
                    width={28}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={0.2}>
                <h3>Seguridad</h3>
                <p className="hide-xs hide-sm hide-md">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </MotionSweepUp>
            </div>
          </div>
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp
                className="__service-item-icon noselect"
                delay={0.4}
              >
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/analisis-icon-blue.png"
                    alt="Icono de analisis"
                    width={34}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/analisis-icon-white.png"
                    alt="Icono de analisis"
                    width={34}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={0.4}>
                <h3>Análisis</h3>
                <p className="hide-xs hide-sm hide-md">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </MotionSweepUp>
            </div>
          </div>
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp
                className="__service-item-icon noselect"
                delay={0.6}
              >
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/capacidad-icon-blue.png"
                    alt="Icono de capacidad"
                    width={30}
                    height={23}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/capacidad-icon-white.png"
                    alt="Icono de capacidad"
                    width={30}
                    height={23}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={0.6}>
                <h3>Capacidad</h3>
                <p className="hide-xs hide-sm hide-md">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </MotionSweepUp>
            </div>
          </div>
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp
                className="__service-item-icon noselect"
                delay={0.8}
              >
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/entorno-icon-blue.png"
                    alt="Icono de entorno"
                    width={16}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/entorno-icon-white.png"
                    alt="Icono de entorno"
                    width={16}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={0.8}>
                <h3>Entorno</h3>
                <p className="hide-xs hide-sm hide-md">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </MotionSweepUp>
            </div>
          </div>
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp
                className="__service-item-icon noselect"
                delay={1.0}
              >
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/conectividad-icon-blue.png"
                    alt="Icono de conectividad"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/conectividad-icon-white.png"
                    alt="Icono de conectividad"
                    width={32}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={1.0}>
                <h3>Conectividad</h3>
                <p className="hide-xs hide-sm hide-md">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </MotionSweepUp>
            </div>
          </div>
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp
                className="__service-item-icon noselect"
                delay={1.2}
              >
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/visualizacion-icon-blue.png?v=0.1"
                    alt="Icono de visualizacion"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/visualizacion-icon-white.png?v=0.1"
                    alt="Icono de visualizacion"
                    width={32}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={1.2}>
                <h3>Visualización</h3>
                <p className="hide-xs hide-sm hide-md">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </MotionSweepUp>
            </div>
          </div>
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp
                className="__service-item-icon noselect"
                delay={1.4}
              >
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/energia-icon-blue.png"
                    alt="Icono de energia"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/energia-icon-white.png"
                    alt="Icono de energia"
                    width={24}
                    height={24}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={1.4}>
                <h3>Energía</h3>
                <p className="hide-xs hide-sm hide-md">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </MotionSweepUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
