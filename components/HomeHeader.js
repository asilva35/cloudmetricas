import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import MotionSweepUp from './MotionSweepUp';

export default function HomeHeader() {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
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
              <div className="cnt-small-bg">
                <Image
                  src="/assets/images/small-bg.jpg?v=0.2"
                  alt="Bg Image"
                  width={428}
                  height={224}
                />
              </div>
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
              <div className="laptop-video-header">
                <Image
                  src="/assets/images/laptop-video-header.png"
                  alt="Cloud Metricas Video Presentación"
                  width={842}
                  height={585}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
