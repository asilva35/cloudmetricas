import Image from 'next/image';
import React from 'react';
import FramerMReadMore from './FramerMReadMore';
import MotionSweepUp from './MotionSweepUp';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <MotionSweepUp delay={0}>
              <h2 className="section-title">
                <b>Ahorra</b> en costos y <b>mejora</b> tus procesos
              </h2>
            </MotionSweepUp>
            <p>
              <MotionSweepUp delay={0.3}>
                Cloud Métricas es una unidad de servicios de monitoreo de
                ACADEMY DATACENTER SAS y ha sido creada para desarrollar
                soluciones de monitoreo para infraestructura física de TIC.
                Además del desarrollo del software de monitoreo, ofrecemos una
                amplia gama de servicios profesionales, desde consultoría hasta
                soluciones turn-key, soporte técnico 24/7 y capacitación
                profesional multinivel.{' '}
              </MotionSweepUp>
            </p>
            <FramerMReadMore labelOpen="Leer Más" labelClose="Leer Menos">
              <p>
                Entre los usuarios finales de Cloud métricas, están
                instituciones gubernamentales de diferentes países y fabricantes
                de equipos para infraestructura física en el área de energía,
                climatización de precisión y soluciones para centro de datos.{' '}
              </p>
            </FramerMReadMore>
          </div>
          <div className="col-12 col-lg-6 hide-xs hide-sm hide-md">
            <div className="__about-images">
              <MotionSweepUp className="__img-01" delay={0.6}>
                <Image
                  src="/assets/images/about.png?v=0.1"
                  alt="Persona analizando datos"
                  width={448}
                  height={448}
                />
              </MotionSweepUp>
              <MotionSweepUp className="__img-02" delay={0.9}>
                <Image
                  src="/assets/images/about-02.png?v=0.1"
                  alt="Personas analizando datos"
                  width={285}
                  height={285}
                />
              </MotionSweepUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
