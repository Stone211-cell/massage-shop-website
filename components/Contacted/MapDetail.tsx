import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactIcon } from "../Contacted/ContactIcon";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const MapDetail = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-blue-200 to-blue-800">
        <Image
          src="/images/banner/S__8683544.webp"
          alt="พื้นหลัง"
          className="absolute inset-0 w-full h-[100%] min-h-[500px] object-cover  backdrop-blur-md"
          fill
        />

        <div className="relative z-10 bg-blue-900/50 p-8 h-[100%] min-h-[500px] rounded-xl text-white backdrop-blur-sm  text-center  flex flex-col justify-center">
          <div className="flex justify-center ">
            <h2 className="text-2xl font-bold  bg-white text-black w-50 rounded-md transition-transform duration-200 ease-in-out hover:scale-110  ">
              <Link href="#map">Contacted</Link>
            </h2>
          </div>

          <div className="my-5">
            <h3 className=" text-5xl font-bold py-5">Lorem ipsum dolor sit amet.</h3>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolore?
            </p>
          </div>

          <div className="flex justify-center text-center ">
            <h2 className="text-md font-bold mt-5  text-black bg-yellow-500 rounded-2xl p-2 transition-transform duration-200 ease-in-out hover:scale-110 ">
              <Link
                href="https://maps.app.goo.gl/bu6t2kMvaarxJroE9"
                className="text-white"
              >
                เปิดแผนที่นำทาง
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
                msg="ที่ตั้ง"
                LINKBTN="https://maps.app.goo.gl/Xb2CXB2nrFop37ee7"
                icontype={faLocationDot}
                classtype=""
              />
            </div>

            <p>
              48/23 ซอย ......................
            </p>
          </div>

          <div className="flex justify-center text-center ">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-10 ">
              <span>
                <ContactIcon
                  sizeicon="2x"
                  coloricon="yellow"
                  msg="โทรศัพท์สอบถาม"
                  description="09999999999"
                  LINKBTN="tel:09999999999"
                  icontype={faPhone}
                  classtype=""
                />
              </span>
              <span>
                <ContactIcon
                  sizeicon="2x"
                  coloricon="yellow"
                  msg="โทรศัพท์สอบถาม"
                  description="09999999999"
                  LINKBTN="tel:09999999999"
                  icontype={faPhone}
                  classtype=""
                />
              </span>
              <span>
                <ContactIcon
                  sizeicon="2x"
                  coloricon="yellow"
                  msg="LINE ID"
                  description="09999999999"
                  LINKBTN="tel:09999999999"
                  icontype={faLine}
                  classtype=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3872.8279941722813!2d100.63774117509318!3d13.909227286499265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDU0JzMzLjIiTiAxMDDCsDM4JzI1LjEiRQ!5e0!3m2!1sth!2sth!4v1749535598325!5m2!1sth!2sth"
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
