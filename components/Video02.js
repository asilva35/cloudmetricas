import Image from 'next/image';
import React from 'react';
import ModalWindow from './ModalWindow/ModalWindow';
import MotionSweepUp from './MotionSweepUp';

export default function Video02() {
  const [isVideoVisible, setIsVideoVisible] = React.useState(false);

  const handleVideoVisibility = () => {
    console.log(565);
    setIsVideoVisible(!isVideoVisible);
  };
  return (
    <section id="video02">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="section-title">
              <MotionSweepUp>
                <b>Cloud Metricas</b> es tu mejor aliado en la{' '}
                <b>administración remota</b>{' '}
                <br className="hide-sm hide-md hide-lg hide-xl" />
                de tu Data Center.
              </MotionSweepUp>
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <MotionSweepUp delay={0.3}>
              <div
                className="__video-preview-container"
                onClick={handleVideoVisibility}
              >
                <Image
                  src="/assets/images/video02-preview.png"
                  alt="Video Preview"
                  width={723}
                  height={371}
                />
              </div>
            </MotionSweepUp>
            {isVideoVisible && (
              <ModalWindow
                initialState="visible"
                callback={handleVideoVisibility}
              >
                <video
                  controls
                  preload="none"
                  className="video-header-lg"
                  poster="/assets/videos/preview-video-01.jpg"
                >
                  <source
                    src="/assets/videos/video-02.webm"
                    type="video/webm"
                  />
                  <source src="/assets/videos/video-02.mp4" type="video/mp4" />
                </video>
              </ModalWindow>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
