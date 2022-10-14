import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import MotionSweepUp from './MotionSweepUp';
import ModalWindow from './ModalWindow/ModalWindow';

export default function HomeHeader() {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  const [isVideoVisible, setIsVideoVisible] = React.useState(false);

  const handleVideoVisibility = () => {
    setIsVideoVisible(!isVideoVisible);
  };
  return (
    <>
      <header id="home-header">
        <div className="cnt-bg">
          {width >= 992 && (
            <Image
              src="/assets/images/big-bg.jpg?v=0.1"
              alt="Bg Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
        </div>
        <div className="decoration-01 hide-xs hide-sm hide-md"></div>
        <div className="decoration-02 hide-xs hide-sm hide-md"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 hide-lg hide-xl">
              <div className="cnt-small-bg" onClick={handleVideoVisibility}>
                <Image
                  src="/assets/images/small-bg.jpg?v=0.2"
                  alt="Bg Image"
                  width={428}
                  height={224}
                />
              </div>
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
                      src="/assets/videos/video-01.webm"
                      type="video/webm"
                    />
                    <source
                      src="/assets/videos/video-01.mp4"
                      type="video/mp4"
                    />
                  </video>
                </ModalWindow>
              )}
            </div>
            <div className="col-12 __main-info-cnt">
              <div className="col-3 col-sm-4 col-md-5 hide-lg hide-xl mobile-logo">
                <Image
                  src="/assets/images/main-logo.png?v=0.2"
                  alt="Bg Image"
                  width={75}
                  height={75}
                />
              </div>

              <div className="col-9 col-sm-8 col-md-7 col-lg-12 __main-text-cnt">
                <h1>
                  <MotionSweepUp>
                    <span className="t-01">
                      <span className="highlight">Cloud Metricas</span> es
                      fácil, <br className="hide-xs" /> rápido y completo.
                    </span>
                  </MotionSweepUp>
                </h1>
              </div>
            </div>
            <div className="col-12 hide-xs hide-sm hide-md">
              <MotionSweepUp>
                <div
                  className="laptop-video-header"
                  onClick={handleVideoVisibility}
                >
                  <Image
                    src="/assets/images/laptop-video-header.png"
                    alt="Cloud Metricas Video Presentación"
                    width={842}
                    height={585}
                  ></Image>
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
                      src="/assets/videos/video-01.webm"
                      type="video/webm"
                    />
                    <source
                      src="/assets/videos/video-01.mp4"
                      type="video/mp4"
                    />
                  </video>
                </ModalWindow>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
