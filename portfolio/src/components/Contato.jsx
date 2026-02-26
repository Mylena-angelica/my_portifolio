import "../styles/contato.css";
import { TelegramIcon, MailIcon, PinIcon, LinkedInIcon, GitHubIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__inner">
        <div className="contact__left">
          <h2 className="contact__title">Entre em contato!</h2>
          <p className="contact__subtitle">
            Tem alguma pergunta ou um projeto em mente? Adoraria saber mais.
            Vamos conversar e criar algo incrível juntos.
          </p>

          <div className="contact__info">
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">
                <TelegramIcon />
              </span>
              <span>Telegram @mylena_angelica</span>
            </div>

            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">
                <MailIcon />
              </span>
              <span>mylena.asf@gmail.com</span>
            </div>

            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">
                <PinIcon />
              </span>
              <span>Brasília - Brasil</span>
            </div>
          </div>

          <div className="contact__social">
            <a className="contact__socialBtn" href="https://www.linkedin.com/in/mylena-angelica/" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="contact__socialBtn" href="https://github.com/Mylena-angelica/" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a className="contact__socialBtn" href="https://t.me/mylena_angelica" aria-label="Telegram">
              <TelegramIcon />
            </a>
          </div>
        </div>

      {/*  <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <input className="contact__input" type="text" placeholder="Nome | Empresa" />
          <input className="contact__input" type="email" placeholder="Email" />
          <input className="contact__input" type="text" placeholder="Telefone" />
          <textarea className="contact__textarea" placeholder="Mensagem" rows={6} />
          <button className="contact__btn" type="submit">
            Enviar mensagem
          </button>
        </form> */}
      </div>
    </section>
  );
}
