import Image from 'next/image';
import React from 'react';
import { motion, useCycle } from 'framer-motion';
import MotionSweepUp from './MotionSweepUp';
import ModalWindow from './ModalWindow/ModalWindow';

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
                        src="/assets/images/services/energia-icon-blue.png"
                        alt="Icono de Energía"
                        width={24}
                        height={25}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Energía</h3>
                      <p>
                        Monitoreo del consumo eléctrico, analiza la cantidad de
                        energía, estimación de costos, cumplimiento de las
                        normas internacionales, motores, bombas, tableros
                        eléctricos, baterías, UPS, PDU, Plantas Eléctricas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/entorno-icon-blue.png"
                        alt="Icono de Aire Acondicionado"
                        width={17}
                        height={33}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Aire Acondicionado</h3>
                      <p>
                        Monitoreo de variables electromecánicas para sistemas de
                        aire acondicionado de confort, precisión, chillers,
                        refrigeración comercial, cuartos fríos precisión, tanto
                        en expansión directa como en agua helada.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/seguridad-icon-blue.png"
                        alt="Icono de Seguridad Electrónica"
                        width={29}
                        height={33}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Seguridad Electrónica</h3>
                      <p>
                        Monitoreo y visualización de sistemas de control de
                        acceso y CCTV para integrar en un solo Dashboard, con
                        imágenes de las cámaras en tiempo real.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/analisis-icon-blue.png"
                        alt="Icono de Redes de Datos"
                        width={34}
                        height={33}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Redes de Datos</h3>
                      <p>
                        Monitoreo de Network performance, Network health,
                        Configuration changes, mediante captación de métricas
                        por SNMP, IPMI, Modos activo/pasivo, y soporte IPv6.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/procesos-icon-blue.png"
                        alt="Icono de Nube computacional"
                        width={34}
                        height={33}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Nube computacional</h3>
                      <p>
                        Servicio en la nube para aquellos clientes que requieran
                        soluciones personalizadas en infraestructura de nube
                        para proyectos IoT o Edge Computing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/conectividad-icon-blue.png"
                        alt="Icono de Integración"
                        width={34}
                        height={33}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Integración</h3>
                      <p>
                        Mediante API y otros desarrollos personalizados, podemos
                        integrarnos a los sistemas de Building management
                        systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/visualizacion-icon-blue.png?v=0.0.1"
                        alt="Icono de Visualización"
                        width={32}
                        height={33}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>Visualización</h3>
                      <p>
                        Vea sus métricas en graficas de alta definición,
                        sencillas, intuitivas y hasta con animaciones para que
                        sus operadores interpreten de manera rápida el estatus
                        de sus procesos y operaciones, bien sea comercial,
                        industrial, o para centros de datos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="__item">
                  <div className="col-2">
                    <div className="__icon-item">
                      <Image
                        src="/assets/images/services/capacidad-icon-blue.png"
                        alt="Icono de DCIM"
                        width={30}
                        height={23}
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="__text-item">
                      <h3>DCIM</h3>
                      <p>
                        La mejor integración del centro de datos con toda su
                        infraestructura física y lógica en una sola plataforma,
                        incluyendo vistas 3D, base de datos de objetos lógicos
                        que permiten la administración de su centro de datos y
                        sistemas Edge.
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
                  Monitoreo del consumo eléctrico, analiza la cantidad de
                  energía, estimación de costos...
                </p>
                <ModalWindow initialState="hidden" labelButton="Leer Más">
                  <p>
                    Monitoreo del consumo eléctrico, analiza la cantidad de
                    energía, estimación de costos, cumplimiento de las normas
                    internacionales, motores, bombas, tableros eléctricos,
                    baterías, UPS, PDU, Plantas Eléctricas.
                  </p>
                </ModalWindow>
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
                    alt="Icono de Aire Acondicionado"
                    width={16}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/entorno-icon-white.png"
                    alt="Icono de Aire Acondicionado"
                    width={16}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={0.8}>
                <h3>Aire Acondicionado</h3>
                <p className="hide-xs hide-sm hide-md">
                  Monitoreo de variables electromecánicas para...
                </p>
                <ModalWindow initialState="hidden" labelButton="Leer Más">
                  <p>
                    Monitoreo de variables electromecánicas para sistemas de
                    aire acondicionado de confort, precisión, chillers,
                    refrigeración comercial, cuartos fríos precisión, tanto en
                    expansión directa como en agua helada.
                  </p>
                </ModalWindow>
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
                <h3>Seguridad Electrónica</h3>
                <p className="hide-xs hide-sm hide-md">
                  Monitoreo y visualización de sistemas de control...
                </p>
                <ModalWindow initialState="hidden" labelButton="Leer Más">
                  <p>
                    Monitoreo y visualización de sistemas de control de acceso y
                    CCTV para integrar en un solo Dashboard, con imágenes de las
                    cámaras en tiempo real.
                  </p>
                </ModalWindow>
              </MotionSweepUp>
            </div>
          </div>
          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp className="__service-item-icon noselect" delay={0}>
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/analisis-icon-blue.png"
                    alt="Icono de Visualización"
                    width={34}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/analisis-icon-white.png"
                    alt="Icono de Visualización"
                    width={34}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={0}>
                <h3>Redes de Datos</h3>
                <p className="hide-xs hide-sm hide-md">
                  Monitoreo de Network performance, Network health,
                  Configuration changes...
                </p>
                <ModalWindow initialState="hidden" labelButton="Leer Más">
                  <p>
                    Monitoreo y visualización de sistemas de control de acceso y
                    CCTV para integrar en un solo Dashboard, con imágenes de las
                    cámaras en tiempo real.
                  </p>
                </ModalWindow>
              </MotionSweepUp>
            </div>
          </div>

          <div className="col-3">
            <div className="__service-item" onClick={__toggleOpen}>
              <MotionSweepUp className="__service-item-icon noselect" delay={0}>
                <div className="__icon-blue">
                  <Image
                    src="/assets/images/services/procesos-icon-blue.png"
                    alt="Icono de Nube computacional"
                    width={30}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/procesos-icon-white.png"
                    alt="Icono de Nube computacional"
                    width={30}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={0}>
                <h3>Nube computacional</h3>
                <p className="hide-xs hide-sm hide-md">
                  Servicio en la nube para aquellos clientes que...
                </p>
                <ModalWindow initialState="hidden" labelButton="Leer Más">
                  <p>
                    Servicio en la nube para aquellos clientes que requieran
                    soluciones personalizadas en infraestructura de nube para
                    proyectos IoT o Edge Computing.
                  </p>
                </ModalWindow>
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
                    alt="Icono de Integración"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="__icon-white">
                  <Image
                    src="/assets/images/services/conectividad-icon-white.png"
                    alt="Icono de Integración"
                    width={32}
                    height={32}
                  />
                </div>
              </MotionSweepUp>
              <MotionSweepUp className="__service-item-text" delay={1.0}>
                <h3>Integración</h3>
                <p className="hide-xs hide-sm hide-md">
                  Mediante API y otros desarrollos personalizados, podemos
                  integrarnos a los...
                </p>
                <ModalWindow initialState="hidden" labelButton="Leer Más">
                  <p>
                    Mediante API y otros desarrollos personalizados, podemos
                    integrarnos a los sistemas de Building management systems.
                  </p>
                </ModalWindow>
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
              <MotionSweepUp className="__service-item-text" delay={0.4}>
                <h3>Visualización</h3>
                <p className="hide-xs hide-sm hide-md">
                  Vea sus métricas en graficas de alta definición, sencillas,
                  intuitivas y hasta...
                </p>
                <ModalWindow initialState="hidden" labelButton="Leer Más">
                  <p>
                    Vea sus métricas en graficas de alta definición, sencillas,
                    intuitivas y hasta con animaciones para que sus operadores
                    interpreten de manera rápida el estatus de sus procesos y
                    operaciones, bien sea comercial, industrial, o para centros
                    de datos.
                  </p>
                </ModalWindow>
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
                <h3>DCIM</h3>
                <p className="hide-xs hide-sm hide-md">
                  La mejor integración del centro de datos con toda su
                  infraestructura física y...
                </p>
                <ModalWindow initialState="hidden" labelButton="Leer Más">
                  <p>
                    La mejor integración del centro de datos con toda su
                    infraestructura física y lógica en una sola plataforma,
                    incluyendo vistas 3D, base de datos de objetos lógicos que
                    permiten la administración de su centro de datos y sistemas
                    Edge.
                  </p>
                </ModalWindow>
              </MotionSweepUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
