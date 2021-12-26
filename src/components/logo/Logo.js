import logotype from "../../images/image.jpg";

export default function Logo({ classLogo }) {
  return <img className={classLogo} src={logotype} alt="logo" />;
}
