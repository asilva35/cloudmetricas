import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Image from 'next/image';

export default function ContactUs({ reference }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const _handleSubmit = async ({
    fullName,
    email,
    company,
    position,
    message,
    services_analisis,
    services_seguimiento,
    services_configuracion,
    services_soporte,
    services_asesoria,
    services_otro,
  }) => {
    let data = {
      fullName,
      email,
      company,
      position,
      message,
      services_analisis,
      services_seguimiento,
      services_configuracion,
      services_soporte,
      services_asesoria,
      services_otro,
    };

    if (isSubmitting) return;
    setIsSubmitting(true);

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    // execute recaptcha
    try {
      const token = await executeRecaptcha();
      if (!token) {
        console.log('Recaptcha token not available');
        return;
      }
      data.token = token;
    } catch (err) {
      toast.error('Sorry, message not sent, please try again later');
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        toast.success('Message sent successfully');
      } else {
        toast.error('Sorry, message not sent, please try again later');
      }
      //SET IS SUBMITING TRUE TO ENABLE SUBMIT BUTTON
      setIsSubmitting(false);
      //RESET REACT HOOK FORM validation
      reset();
    });
  };
  return (
    <section id="contactus" ref={reference}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 hide-xs hide-sm hide-md">
            <div className="__contactus-image">
              <Image
                src="/assets/images/contactus-image.png"
                alt="contactus"
                width={538}
                height={950}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="section-title">
              <b>Trabajemos juntos</b> y subamos el nivel de tu negocio
            </h2>
            <p>
              También puedes comunicarte por{' '}
              <a href="mailto:info@cloudmetricas.com">info@cloudmetricas.com</a>
            </p>
            <hr />
            <form id="contact-form" onSubmit={handleSubmit(_handleSubmit)}>
              <div className="form-group">
                <label htmlFor="full-name">Nombre Completo:</label>
                <input
                  type="text"
                  className="form-control"
                  id="full-name"
                  placeholder="Nombre Completo:"
                  {...register('fullName', {
                    required: 'This Field is Required',
                  })}
                />
                {errors.fullName && (
                  <span className="error">{errors.fullName.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Dirección de E-mail:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Dirección de E-mail:"
                  {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="company">Empresa:</label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Empresa:"
                  {...register('company', {
                    required: 'This Field is Required',
                  })}
                />
                {errors.company && (
                  <span className="error">{errors.company.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="position">Cargo:</label>
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  placeholder="Cargo:"
                  {...register('position', {
                    required: 'This Field is Required',
                  })}
                />
                {errors.position && (
                  <span className="error">{errors.position.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Ingrese un Mensaje:"
                  {...register('message', {
                    required: 'This Field is Required',
                  })}
                />
                {errors.message && (
                  <span className="error">{errors.message.message}</span>
                )}
              </div>
              <h4>Estoy interesado en:</h4>
              <div className="form-group __switch-group">
                <label htmlFor="services">Análisis</label>
                <label className="switch-input">
                  <input
                    type="checkbox"
                    className="form-control"
                    id="services_analisis"
                    {...register('services_analisis')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="form-group __switch-group">
                <label htmlFor="services">Seguimiento</label>
                <label className="switch-input">
                  <input
                    type="checkbox"
                    className="form-control"
                    id="services_seguimiento"
                    {...register('services_seguimiento')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="form-group __switch-group">
                <label htmlFor="services">Configuración</label>
                <label className="switch-input">
                  <input
                    type="checkbox"
                    className="form-control"
                    id="services_configuracion"
                    {...register('services_configuracion')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="form-group __switch-group">
                <label htmlFor="services">Soporte</label>
                <label className="switch-input">
                  <input
                    type="checkbox"
                    className="form-control"
                    id="services_soporte"
                    {...register('services_soporte')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="form-group __switch-group">
                <label htmlFor="services">Asesoría</label>
                <label className="switch-input">
                  <input
                    type="checkbox"
                    className="form-control"
                    id="services_asesoria"
                    {...register('services_asesoria')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="form-group __switch-group">
                <label htmlFor="services">Otro</label>
                <label className="switch-input">
                  <input
                    type="checkbox"
                    className="form-control"
                    id="services_otro"
                    {...register('services_otro')}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn-main"
                  disabled={isSubmitting}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
