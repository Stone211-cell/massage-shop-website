import { faLocationDot, } from "@fortawesome/free-solid-svg-icons";
import { ContactIcon } from "../Contacted/ContactIcon";
import Link from "next/link";
import Image from "next/image";
import { faFacebook, faInstagram, } from "@fortawesome/free-brands-svg-icons";

const MapDetail = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-blue-200 to-blue-800">
        <Image
          src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
          alt="Thaimassage"
          className="absolute inset-0 w-full h-[100%] min-h-[500px] object-cover  backdrop-blur-2xl"
          fill
        />

        <div className="relative z-10 bg-blue-900/50 p-8 h-[100%] min-h-[500px] rounded-xl text-white backdrop-blur-sm  text-center  flex flex-col justify-center">
          <div className="flex justify-center ">
            <h2 className="text-2xl font-bold  bg-white text-black w-50 rounded-md transition-transform duration-200 ease-in-out hover:scale-110  ">
              <Link href="#map">Contacted</Link>
            </h2>
          </div>

          <div className="my-5">
            <h3 className=" text-5xl font-bold py-5">
                Welcome to one of the best therapeutic massage studios in your area!
            </h3>

          </div>

          <div className="flex justify-center text-center ">
            <h2 className="text-md font-bold mt-5  text-black bg-yellow-500 rounded-2xl p-2 transition-transform duration-200 ease-in-out hover:scale-110 ">
              <Link
                href="https://maps.app.goo.gl/bu6t2kMvaarxJroE9"
                className="text-white"
              >
                Open google map
              </Link>
            </h2>
          </div>

          <div
            id="map"
            className=" my-5 text-center flex flex-col justify-items-center"
          >
            <div className=" flex flex-col items-center justify-items-center justify-self-center">
              <ContactIcon
                sizeicon="2x"
                coloricon="yellow"
                msg="Location"
                LINKBTN="https://maps.app.goo.gl/G91hnKQN56t3B8U3A"
                icontype={faLocationDot}
                classtype=""
              />
            </div>

            <p>
              2A Cobden Wollaston, Stourbridge DY8 3RU Authentic Thai Massage
              Lounge
            </p>
          </div>

          <div className="flex justify-center text-center ">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-10 ">
              <span>
                <ContactIcon
                  sizeicon="2x"
                  coloricon="yellow"
                  msg="facebook"
      
                  LINKBTN="https://www.facebook.com/share/19Nn5phDET/?mibextid=wwXIfr"
                  icontype={faFacebook}
                  
                  classtype=""
                />
              </span>
              <span>
                <ContactIcon
                  sizeicon="2x"
                  coloricon="yellow"
                  msg="instagram"
            
                  LINKBTN="https://www.instagram.com/authenticthaimassageuk?igsh=MXc3eWR4b2lrbGdncg%3D%3D&utm_source=qr"
                  icontype={faInstagram}
                
                  classtype=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d151.9407637593182!2d-2.1638424!3d52.4600817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487091c2fcca1fa9%3A0x2ec72c6f644e24c5!2sAuthentic%20Thai%20Massage%20Lounge!5e0!3m2!1sth!2sth!4v1751467292330!5m2!1sth!2sth"
          width="100%"

          height="500"
          loading="lazy"
          
          
          //               style="border:0;"
          // allowfullscreen=""
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default MapDetail;
