import Image from 'next/image';
import React from 'react';
import MotionSweepUp from './MotionSweepUp';

export default function Partners() {
  return (
    <section id="partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <MotionSweepUp>
              <p>
                Usado por más de <b>50 compañías</b> en Latinoamérica
              </p>
            </MotionSweepUp>
          </div>
          <div className="col-12 __logos-partners">
            <div className="col-3">
              <MotionSweepUp>
                <Image
                  src="/assets/images/logo-linux.png"
                  alt="Logo Linux"
                  width={164}
                  height={40}
                />
              </MotionSweepUp>
            </div>
            <div className="col-3">
              <MotionSweepUp delay={0.3}>
                <Image
                  src="/assets/images/logo-microsoft.png"
                  alt="Logo Microsoft"
                  width={234.38}
                  height={40}
                />
              </MotionSweepUp>
            </div>
            <div className="col-3">
              <MotionSweepUp delay={0.6}>
                <Image
                  src="/assets/images/logo-azure.png"
                  alt="Logo Azure"
                  width={147}
                  height={40}
                />
              </MotionSweepUp>
            </div>
            <div className="col-3">
              <MotionSweepUp delay={0.9}>
                <Image
                  src="/assets/images/logo-vmware.png"
                  alt="Logo VMWare"
                  width={306}
                  height={40}
                />
              </MotionSweepUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
