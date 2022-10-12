import Image from 'next/image';
import React from 'react';

export default function Video02() {
  return (
    <section id="video02">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="section-title">
              <b>Cloud Metricas</b> es tu mejor aliado en la{' '}
              <b>administración remota</b>
              <br className="hide-sm hide-md hide-lg hide-xl" />
              de tu Data Center.
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <div className="__video-preview-container">
              <Image
                src="/assets/images/video02-preview.png"
                alt="Video Preview"
                width={723}
                height={371}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
