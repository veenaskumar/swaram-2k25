import React from "react";
import Navbar1 from "../components/navbar";
import "../stylesheet/ourteam.css";
import our_team_data from "../json/ourteam";
import Contact from "../components/contact";
function Ourteam_page() {
  return (
    <>
      <Navbar1 />
      <div className="w-[100%]" id="gallary_page_background">
        <div className="pt-[80px] ">
          <div className="pt-[30px]">
            <div
              id="ourteam"
              className="flex flex-col justify-center items-center gap-[2rem] w-[100%]"
            >
              <div>
                <div className="text-[28px] font-semibold w-[100%]">
                  Our <span className="text-[red]">Team</span>
                </div>
              </div>
              <section id="cards" className="py-[20px]  w-[100%]">
                <div className="flex flex-col items-center gap-[2rem]">
                  <div class="row gap-y-[3rem] sm:gap-y-[2rem]  sm:gap-[0px] justify-center items-center min-w-[100%] ">
                    {our_team_data.map((item) => {
                      return item.position == "ASP Sr.G/ CIVIL" ? (
                        <div class="col-lg-4  col-md-6 col-12 w-[100%]">
                          <div class=" border-transparent rounded-none  bg-transparent">
                            <div class=" flex flex-col gap-[2.5rem] sm:gap-[2rem] justify-center rounded-none border-transparent items-center w-[100%]">
                              <div class="user-picture ">
                                <img
                                  src={item.image}
                                  class="rounded-circle user-pic-pres"
                                  height="140"
                                  width="140"
                                />
                              </div>
                              <div class="user-content text-center w-[100%]">
                                <h2 class="text-[white] font-bold sm:text-[18px] text-uppercase  w-[100%] ">
                                  {item.name}
                                </h2>
                                <p class=" font-semibold text-[#d2d2d2] text-capitalize ">
                                  {item.position}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                  <div class="row gap-y-[3rem] sm:gap-y-[2rem]  sm:gap-[0px] justify-between min-w-[100%]">
                    {our_team_data.map((item) => {
                      return item.position != "ASP Sr.G/ CIVIL" ? (
                        <div class="col-lg-4  col-md-6 col-12 w-[100%]">
                          <div class=" border-transparent rounded-none  bg-transparent">
                            <div class=" flex flex-col gap-[2.5rem] sm:gap-[2rem] justify-center rounded-none border-transparent items-center w-[100%]">
                              <div class="user-picture ">
                                <img
                                  src={item.image}
                                  class="rounded-circle user-pic-pres"
                                  height="140"
                                  width="140"
                                />
                              </div>
                              <div class="user-content text-center w-[100%]">
                                <h2 class="text-[white] font-bold sm:text-[18px] text-uppercase  w-[100%] ">
                                  {item.name}
                                </h2>
                                <p class=" font-semibold text-[#d2d2d2] text-capitalize ">
                                  {item.position}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Ourteam_page;

