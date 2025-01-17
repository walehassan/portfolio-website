import Link from "next/link";
import { FaTwitter, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";


const socials = [
  {icon: <FaGithub/>, path: ''},
  {icon: <FaLinkedin/>, path: ''},
  {icon: <FaTwitter/>, path: ''},
  {icon: <FaYoutube/>, path: ''},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;