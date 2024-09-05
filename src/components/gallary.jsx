/* eslint-disable */
import React, { useRef, useState } from "react";

const Gallary = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([
    "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    "https://www.pacegallery.com/media/images/16_9-2.width-2000.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXWzC7IMjhrQUwTsLcDzKI3DZQpwyRBYnjw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjqul6S4IKZD09MtwQbTTrVMBQP03zUtJZQ&s",
    "https://www.kdnuggets.com/wp-content/uploads/tree-todd-quackenbush-unsplash.jpg",
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    showActiveTabContent();
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
    }
  };

  const showActiveTabContent = () => {
    if (activeTab === "tab1") {
      return (
        <article className="mt-4 text-base text-neutral-400 max-md:mr-1 max-md:max-w-full">
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
          </p>
          <br />
          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my This Lorem ipsum dolor
            sit,
            a...
          </p>
        </article>
      );
    } else if (activeTab == "tab2") {
      return (
        <article className="mt-4 text-base text-neutral-400 max-md:mr-1 max-md:max-w-full">
          <p>
            Experience Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maxime, eveniet? Lorem ipsum dolor sit amet.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            corporis, aspernatur repellendus voluptates sint sit amet consectetur
            adipisicing?
          </p>
        </article>
      );
    } else if (activeTab == "tab3") {
      return (
        <article className="mt-4 text-base text-neutral-400 max-md:mr-1 max-md:max-w-full">
          <p>
            Recommended Tab Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Eaque, facere. Lorem ipsum dolor sit amet.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            corporis, aspernatur repellendus voluptates sint ipsum dolor sit amet.
          </p>
        </article>
      );
    }
  };

  return (
    <div className="layout-bg min-h-[100vh] flex flex-row justify-center px-10 gap-12 pt-10 pb-20 shadow-black items-center">
      {/* Left Side  */}
      <div className="left-section opacity h-[540px] hidden lg:w-[50%] lg:block xl:w-[40%]"></div>
      {/* RIght Side */}
      <div className="right-section flex flex-col gap-5 h-[540px] w-[100%] md:w-[700px] lg:w-[100%] xl:w-[50%] 2xl:w-[720px] items-center justify-center">
        <section className="aboutself w-100 h-[46%] flex gap-4 px-3.5 pb-7 pt-4 mt-10 rounded-2xl bg-zinc-700 shadow-[6px_6px_4px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col self-start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z"
                fill="url(#paint0_linear_9_60)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_60"
                  x1="19.5"
                  y1="27.5"
                  x2="3.5"
                  y2="2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A4E54" />
                  <stop offset="1" stopColor="#A3ADBA" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-wrap gap-px items-start mt-20 w-full rounded-sm max-md:mt-10">
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  y="10.6878"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  y="10.6878"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  y="21.3757"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  y="21.3757"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
              </svg>
            </div>
          </div>
          {/* About me section */}
          <div className="flex flex-col max-md:max-w-full">
            <nav className="grid-flow-row auto-rows-max flex gap-1 px-2 py-2 w-full text-base font-medium leading-none  text-gray-400 rounded-3xl bg-neutral-900 max-md:max-w-full justify-between">
              <button
                className={`gap-2.5 grow self-stretch p-0 py-[13px] px-[35px]  rounded-[16px] max-md:px-5 ${
                  activeTab === "tab1"
                    ? "shadow-[5px_23px_38px_4px_black] tabactive text-white"
                    : "hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
                }`}
                onClick={() => {
                  handleTabChange("tab1");
                }}
              >
                About Me
              </button>
              <button
                className={`gap-2.5 grow justify-center items-start p-0 py-[13px] px-[35px] whitespace-nowrap rounded-[16px]  max-md:px-5 ${
                  activeTab === "tab2"
                    ? "shadow-[5px_23px_38px_4px_black] tabactive text-white"
                    : "hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
                }`}
                onClick={() => {
                  handleTabChange("tab2");
                }}
              >
                <span className="z-0 my-auto">Experiences</span>
              </button>
              <button
                className={`gap-2.5 grow justify-center items-start p-0 py-[13px] px-[35px] whitespace-nowrap rounded-[16px]  max-md:px-5 ${
                  activeTab === "tab3"
                    ? "shadow-[5px_23px_38px_4px_black] tabactive text-white"
                    : "hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
                }`}
                onClick={() => {
                  handleTabChange("tab3");
                }}
              >
                <span className="z-0 my-auto">Recommended</span>
              </button>
            </nav>
            {showActiveTabContent()}
          </div>

          <div
            className="flex shrink-0 my-auto w-2 h-16 rounded-lg shadow-[4px_4.9px_0px_rgba(0,0,0,0.25)] scrollbar"
            aria-hidden="true"
          ></div>
        </section>
        {/* Divider */}
        <div className="divider">
          <hr className="divider opacity-0" />
        </div>

        {/* Gallary */}

        <section className="gallary w-full h-[48%] flex gap-4 px-3.5 pt-4 pb-7 rounded-2xl bg-zinc-700 shadow-[6px_6px_4px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z"
                fill="url(#paint0_linear_9_60)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_60"
                  x1="19.5"
                  y1="27.5"
                  x2="3.5"
                  y2="2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A4E54" />
                  <stop offset="1" stopColor="#A3ADBA" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-wrap items-start mt-28 w-full rounded-sm max-md:mt-10">
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  y="10.6878"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  y="10.6878"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  y="21.3757"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  y="21.3757"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <nav className="flex flex-wrap gap-1 px-2 py-2 w-full text-base font-medium leading-none  text-gray-400 rounded-3xl  max-md:max-w-full justify-between">
              <button className="gap-2.5 self-stretch px-8 py-4 text-white rounded-2xl  bg-neutral-900">
                Gallary
              </button>
              <div className="flex gap-8 justify-between items-center">
                <button
                  className="p-0 px-4 py-3 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs
                flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5] addimgbtn "
                  onClick={() => fileInputRef.current.click()}
                >
                  <span className="flex items-center z-0 text-fw-bold">
                    <svg
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.95374 9.08068C4.95374 9.2812 5.03339 9.47351 5.17518 9.61529C5.31696 9.75708 5.50927 9.83673 5.70978 9.83673C5.9103 9.83673 6.10261 9.75708 6.24439 9.61529C6.38618 9.47351 6.46583 9.2812 6.46583 9.08068V5.80448H9.74204C9.94256 5.80448 10.1349 5.72482 10.2766 5.58303C10.4184 5.44125 10.4981 5.24894 10.4981 5.04843C10.4981 4.84791 10.4184 4.65561 10.2766 4.51382C10.1349 4.37203 9.94256 4.29238 9.74204 4.29238H6.46583V1.01617C6.46583 0.815652 6.38618 0.623348 6.24439 0.481562C6.10261 0.339775 5.9103 0.26012 5.70978 0.26012C5.50927 0.26012 5.31696 0.339775 5.17518 0.481562C5.03339 0.623348 4.95374 0.815652 4.95374 1.01617V4.29238H1.67753C1.47701 4.29238 1.28471 4.37203 1.14292 4.51382C1.00113 4.65561 0.921478 4.84791 0.921478 5.04843C0.921478 5.24894 1.00113 5.44125 1.14292 5.58303C1.28471 5.72482 1.47701 5.80448 1.67753 5.80448H4.95374V9.08068Z"
                        fill="white"
                      />
                    </svg>
                    &nbsp; ADD IMAGES
                  </span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <div className="next-prev flex gap-3 text-[#6F787C] px-2">
                  <div
                    className="rounded-full
                  shadow-[0px_0px_20px_6px_#6a8897]
                  active:scale-[0.8] z-0"
                  >
                    <button
                      className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                      shadow-[2px_8px_22px_5px_black]"
                      onClick={handlePrev}
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.40222 8.37645H15.5967"
                          stroke="#6F787C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokellinejoin="round"
                        />
                        <path
                          d="M8.40222 15.3765L1.40222 8.37646L8.40222 1.37646"
                          stroke="#6F787C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokellinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="rounded-full
                  shadow-[0px_0px_20px_6px_#6a8897]
                  active:scale-[0.8] z-0"
                  >
                    <button
                      className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                      shadow-[2px_8px_22px_5px_black]"
                      onClick={handleNext}
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5968 8.37648L1.40236 8.37648"
                          stroke="#6F787C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokellinejoin="round"
                        />
                        <path
                          d="M8.5968 1.37646L15.5968 8.37646L8.5968 15.3765"
                          stroke="#6F787C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokellinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            {/* Images Render */}
            <article className="mt-7 text-base text-neutral-400 max-md:mr-1 max-md:max-w-full">
              <div className="grid grid-cols-3 gap-4 justify-center items-center px-2">
                {images
                  .slice(currentIndex, currentIndex + 3)
                  .map((image, i) => {
                    return (
                      <div className="relative" key={i}>
                        <img
                          src={image}
                          alt=""
                          className="h-[135px] w-[165px] rounded-2xl "
                        />
                      </div>
                    );
                  })}
              </div>
            </article>
          </div>
        </section>
        <div className="divider">
          <hr className="divider opacity-0" />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
