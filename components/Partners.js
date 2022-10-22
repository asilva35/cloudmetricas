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
                <div className="logos-group-animated">
                  <div className="logos-group-container">
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-linux.png?v=0.0.1"
                        alt="Logo Linux"
                        width={126.54}
                        height={40}
                      />
                    </div>
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-zabbix.png"
                        alt="Logo Zabbix"
                        width={152.67}
                        height={40}
                      />
                    </div>
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-nginx.png"
                        alt="Logo NGINX"
                        width={136.53}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </MotionSweepUp>
            </div>
            <div className="col-3">
              <MotionSweepUp delay={0.3}>
                <div className="logos-group-animated">
                  <div className="logos-group-container delay-1">
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-amazon.png?v=0.01"
                        alt="Logo Amazon"
                        width={207.99}
                        height={40}
                      />
                    </div>
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-mariadb.png"
                        alt="Logo Maria DB"
                        width={160.41}
                        height={40}
                      />
                    </div>
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-ubuntu.png"
                        alt="Logo Ubuntu"
                        width={187.65}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </MotionSweepUp>
            </div>
            <div className="col-3">
              <MotionSweepUp delay={0.6}>
                <div className="logos-group-animated">
                  <div className="logos-group-container delay">
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-azure.png"
                        alt="Logo Azure"
                        width={147}
                        height={40}
                      />
                    </div>
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-postgresql.png"
                        alt="Logo Postgresql"
                        width={204.8}
                        height={40}
                      />
                    </div>
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-debian.png"
                        alt="Logo Debian"
                        width={79.5}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </MotionSweepUp>
            </div>
            <div className="col-3">
              <MotionSweepUp delay={0.9}>
                <div className="logos-group-animated delay-1">
                  <div className="logos-group-container delay">
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-apache.png"
                        alt="Logo Apache"
                        width={93.32}
                        height={40}
                      />
                    </div>
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-postgresql.png"
                        alt="Logo Postgresql"
                        width={204.8}
                        height={40}
                      />
                    </div>
                    <div className="logo-group-item">
                      <Image
                        src="/assets/images/logo-suse.png"
                        alt="Logo Suse"
                        width={88.15}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </MotionSweepUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
