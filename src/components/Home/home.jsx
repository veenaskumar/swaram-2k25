import React from "react";
import "../../stylesheet/home.css";
import LaunchTimer from "./Home-LaunchTimer";
import TypewriterComponent from "./Home-Typewriter";
import useDeviceSize from "../useWindowSize";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";

function Home() {
  const [width, height] = useDeviceSize();
  return (
    <div>
      <div
        id="home"
        className="home-SCC  min-w-[100%] md:h-[100vh] sm:h-[80vh]  "
      >
        <div className="home-section-Rpp bg-fixed  min-w-[100%]  ">
          <div className="auto-group-rk2v-NBe  min-w-[100%] sm:h-[10px]  ">
            <img
              className="rectangle-2-hji sm:hidden"
              src="./Home-img/rectangle-2.png"
              alt="Rectangle 2"
            />
            <div className="sm:flex justify-center gap-[0px] pt-[-100px]  ">
              <div className="sm:flex sm:justify-center sm:text-center  ">
                <div className="music-event-qDe absolute  sm:w-[100%] sm:top-[-5%] sm:text-wrap sm:left-[-10%]">
                  <TypewriterComponent />
                </div>
                <div>
                  {width <= 430 ? (
                    <div
                      className="crazy-non-stop-music-jpp   sm:text-wrap w-[100%] sm:w-[100%] sm:right-[5%] sm:top-[-6%] absolute  top-27.2   text-[20px] sm:pt-[-100px]font-semibold text-white capitalize  sm:flex "
                      id="type-text"
                    >
                      KEC’s gala of all times <br /> welcomes u all hii
                    </div>
                  ) : (
                    <div
                      className="crazy-non-stop-music-jpp  sm:text-wrap w-[100%] sm:w-[100%] sm:right-[30%] sm:top-[-7%] absolute  top-27.2   text-[20px] sm:pt-[-100px]font-semibold text-white capitalize  sm:flex "
                      id="type-text"
                    >
                      KEC’s gala of all times welcomes u all
                    </div>
                  )}
                </div>
              </div>

              <div className="flex  sm:w-[100%] sm:pl-0">
                <div className="details-3ac absolute  md:left-12.4 top-49.1 w-12.7 h-9.8  sm:min-w-[100%] sm:mt-[-100px]  md:pl-[12.4rem] sm:flex sm:flex-col sm:justify-center flex flex-col gap-[1rem] ">
                  <div className="group-2-aKe flex items-center  sm:min-w-[100%]  sm:flex sm:justify-center  ">
                    <IoLocationSharp
                      size={28}
                      color="red"
                      className=" mb-[0.8rem] "
                    />
                    <p
                      className="erode-qFa text-3  sm:text-[14px]"
                      id="type-text"
                    >
                      Kongu Convention Centre
                    </p>
                  </div>
                  <div className="group-1-WFE flex items-center sm:flex sm:justify-center ">
                    <div className="flex items-center  justify-center">
                      <FaRegCalendarDays
                        size={20}
                        color="red"
                        className=" mb-[1rem] ml-[0.5rem]"
                      />
                      <p
                        className="jan-5-ZDW text-3 font-bold text-white capitalize "
                        id="type-text"
                      >
                        March 17
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timer-VN4 w-[100%]   float-left md:pt-[47.4rem] sm:min-w-[100%] sm:mt-[270px] sm:flex sm:top-[5%]  ">
                <LaunchTimer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

