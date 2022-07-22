import imgFacebook from "../../assets/images/facebook.png";
import imgInstagram from "../../assets/images/instagram.png";
import imgLogo from "../../assets/images/logo2.png";

export default function Contacts() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around m-auto p-[80px] w-max-[1520px] min-w-[320px] border-t-2 border-t-solid border-t-[#2D6BA2]">
      <div className="w-[100px] pb-2">
        <h6 className="text-[32px] lg:text-[62px] font-light mb-[20px]">
          Contáctanos
        </h6>
        <p className="text-[24px] mb-[10px]">flormw@gmail.com</p>
        <p className="text-[24px] mb-[10px] italic w-[200px]">099 628 9027</p>
        <div className="flex w-[200px] h-[70px]">
          <i className="text-[20px] p-4 w-[90px] h-[70px] text-center cursor-pointer">
            <img
              className="w-[60px] h-[60px]"
              src={imgFacebook}
              alt="Facebook"
            />
          </i>
          <i className="text-[20px] p-4 w-[90px] h-[70px] text-center cursor-pointer">
            <img
              className="w-[60px] h-[60px]"
              src={imgInstagram}
              alt="Instagram"
            />
          </i>
        </div>
      </div>
      <div className="max-w-[400px] pb-2">
        <img
          className="w-full object-cover "
          src={imgLogo}
          alt="Logo del SPA"
        />
      </div>
    </div>
  );
}
