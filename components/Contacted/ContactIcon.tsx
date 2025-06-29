import Link from "next/link";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


type classtype = {
  pops?: string;
  sizeicon?: "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "5x" | "10x";
  coloricon?: string;
  LINKBTN?: string | undefined;
  msg?: string;
  description?: string;
  icontype?: IconProp;
  classtype?: string
};

export const ContactIcon = ({
  pops,
  sizeicon,
  coloricon,
  icontype,
  LINKBTN,
  msg,
  description,
  classtype
}: classtype) => {
  const LinkDefault =
    "https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr";
  return (
    <div>
      <div  className={`flex gap-2 justify-start items-center transition-transform duration-200 ease-in-out hover:scale-110 ${classtype}`}>
        <Link
          href={LINKBTN ?? LinkDefault}
          className="flex items-center text-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={icontype ?? faFacebook}
            size={sizeicon}
            color={coloricon}
          />
        </Link>
        <div className={pops}>
          <Link
            href={LINKBTN ?? LinkDefault}
            rel="noopener noreferrer"
          >
           <p>{msg}</p>
          </Link>
          
          <Link
            href={LINKBTN ?? LinkDefault}
            rel="noopener noreferrer"
          >
            {description}
          </Link>
        </div>
      </div>
    </div>
  );
};
