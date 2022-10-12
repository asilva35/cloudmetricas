import Image from 'next/image';
import React from 'react';

export default function Partners() {
  return (
    <section id="partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              Usado por más de <b>50 compañías</b> en Latinoamérica
            </p>
          </div>
          <div className="col-12 __logos-partners">
            <div className="col-3">
              <Image
                src="/assets/images/logo-linux.png"
                alt="Logo Linux"
                width={164}
                height={40}
              />
            </div>
            <div className="col-3">
              <Image
                src="/assets/images/logo-microsoft.png"
                alt="Logo Microsoft"
                width={234.38}
                height={40}
              />
            </div>
            <div className="col-3">
              <Image
                src="/assets/images/logo-azure.png"
                alt="Logo Azure"
                width={147}
                height={40}
              />
            </div>
            <div className="col-3">
              <Image
                src="/assets/images/logo-vmware.png"
                alt="Logo VMWare"
                width={306}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
