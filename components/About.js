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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{' '}
              </MotionSweepUp>
            </p>
            <FramerMReadMore labelOpen="Leer Más" labelClose="Leer Menos">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{' '}
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
