import { IconLink, IconsSocialContainer } from "./IconsSocial.styled";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const IconsSocial = () => {
  const socialLinks = (
    <>
      <IconLink to="https://linkedin.com/in/canberkocalir">
        <BsLinkedin/>
      </IconLink>
      <IconLink to="https://github.com/canocalir">
        <BsGithub/>
      </IconLink>
    </>
  );
  return <IconsSocialContainer>{socialLinks}</IconsSocialContainer>;
};

export default IconsSocial;
