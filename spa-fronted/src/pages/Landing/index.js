import imageFont from "../../assets/images/Landing.png";
import LinkButton from "../../components/LinkButton";
import { classButtonLanding } from "../../Helpers/Constants";
import useNavbar from "../../hooks/useNavbar";
import Main from "../Main";
import "./styles.css";

export default function Landing({ to }) {
  // va en todas las pages principales del navbar para que permita seleccionarce
  const { setUrl } = useNavbar();
  const { session } = useNavbar();
  setUrl(to);

  return (
    <>
      <div className="contain">
        <img src={imageFont} className="image" alt="" />
        <section className="section ml-4 mr-4 lg:ml-16 max-w-[348px]">
          <span className="title lg:tracking-[0.3em] mb-4">
            Relajarse es volver a nacer
          </span>
          <p className="sub-title mb-4">
            Disfruta de todos nuestros productos y servicios
          </p>
          {!session.email && (
            <>
              <LinkButton to="/register" className={classButtonLanding}>
                Regístrate
              </LinkButton>
              <LinkButton to="/login" className={classButtonLanding}>
                Inicia Sesión
              </LinkButton>
            </>
          )}
        </section>
      </div>
      <Main />
    </>
  );
}
