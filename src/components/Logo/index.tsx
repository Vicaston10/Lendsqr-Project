import logoImg from "../../assets/svgs/Union.svg"
import logoText from "../../assets/svgs/lendsqr.svg"

export const Logo = () => {

    const logoStyle = {
        display:"flex",
        alignItems:"center"
    }

    const img={
        margin:"0.3rem"
    }

  return (
    <div style={logoStyle}>
      <img style={img} src={logoImg} alt="" />
      <img style={img} src={logoText} alt="" />
    </div>
  );
};
