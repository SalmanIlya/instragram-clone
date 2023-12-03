import React from "react";
import "./Style.css";
import Sidebar from "../Sidebar/Sidebar";
import Navabr from "../TopNavbar/Navabr";
import Image from "next/image";

const Home = () => {
  return (
    <div className="home-main">
      <Navabr />
      <Sidebar />
      <div className="home ">
        <div className="home-box-1">
          {/* status */}
          <div className="Status flex flex-row  ">
            <div className="flex flex-col justify-center items-center mx-2 ">
              <div className="images-bg">
                <div className="bg-red-100 h-12 w-12 rounded-full"></div>
              </div>
              <p>name </p>
            </div>
            <div className="flex flex-col justify-center items-center mx-2 ">
              <div className="images-bg">
                <div className="bg-red-100 h-12 w-12 rounded-full"></div>
              </div>
              <p>name </p>
            </div>
            <div className="flex flex-col justify-center items-center mx-2 ">
              <div className="images-bg">
                <div className="bg-red-100 h-12 w-12 rounded-full"></div>
              </div>
              <p>name </p>
            </div>
            <div className="flex flex-col justify-center items-center mx-2 ">
              <div className="images-bg">
                <div className="bg-red-100 h-12 w-12 rounded-full"></div>
              </div>
              <p>name </p>
            </div>
            <div className="flex flex-col justify-center items-center mx-2 ">
              <div className="images-bg">
                <div className="bg-red-100 h-12 w-12 rounded-full"></div>
              </div>
              <p>name </p>
            </div>
            <div className="flex flex-col justify-center items-center mx-2 ">
              <div className="images-bg">
                <div className="bg-red-100 h-12 w-12 rounded-full"></div>
              </div>
              <p>name </p>
            </div>
            <div className="flex flex-col justify-center items-center mx-2 ">
              <div className="images-bg">
                <div className="bg-red-100 h-12 w-12 rounded-full"></div>
              </div>
              <p>name </p>
            </div>
          </div>
        </div>
        <div className="home-box-2">
          <div className="person flex flex-row justify-between items-center px-4  mt-9">
            <div className="flex flex-row justify-between">
              <Image
                src={"/images/par.jpg"}
                alt=""
                width={48}
                height={48}
                className="rounded-full h-12"
              />
              <div className="flex flex-col justify-center  mx-4">
                {/*id name  */}
                <h1 className="text-xs font-bold">my-id-name</h1>
                {/* name  */}
                <h1 className="text-xs">name</h1>
              </div>
            </div>

            <p className="font-bold text-blue-400 text-xs ">switch</p>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center px-4 py-1  mt-9">
              <p
                className="text-xs  font-bold text-gray-500
       "
              >
                Suggested for you
              </p>
              <p className="text-xs text-black">see all</p>
            </div>
            <div>
              <div className="person flex flex-row justify-between items-center px-4  mt-2">
                <div className="flex flex-row justify-between">
                  <Image
                    src={"/images/par.jpg"}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full h-12"
                  />
                  <div className="flex flex-col justify-center  mx-4">
                    {/*id name  */}
                    <h1 className="text-xs font-bold">my-id-name</h1>
                    {/* name  */}
                    <p className="font-light text-xs">Follows you</p>
                  </div>
                </div>

                <p className="font-bold text-blue-400 text-xs ">Follow</p>
              </div>
              <div className="person flex flex-row justify-between items-center px-4  mt-2">
                <div className="flex flex-row justify-between">
                  <Image
                    src={"/images/par.jpg"}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full h-12"
                  />
                  <div className="flex flex-col justify-center  mx-4">
                    {/*id name  */}
                    <h1 className="text-xs font-bold">my-id-name</h1>
                    {/* name  */}
                    <p className="font-light text-xs">Follows you</p>
                  </div>
                </div>

                <p className="font-bold text-blue-400 text-xs ">Follow</p>
              </div>
              <div className="person flex flex-row justify-between items-center px-4  mt-2">
                <div className="flex flex-row justify-between">
                  <Image
                    src={"/images/par.jpg"}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full h-12"
                  />
                  <div className="flex flex-col justify-center  mx-4">
                    {/*id name  */}
                    <h1 className="text-xs font-bold">my-id-name</h1>
                    {/* name  */}
                    <p className="font-light text-xs">Follows you</p>
                  </div>
                </div>

                <p className="font-bold text-blue-400 text-xs ">Follow</p>
              </div>
              <div className="person flex flex-row justify-between items-center px-4  mt-2">
                <div className="flex flex-row justify-between">
                  <Image
                    src={"/images/par.jpg"}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full h-12"
                  />
                  <div className="flex flex-col justify-center  mx-4">
                    {/*id name  */}
                    <h1 className="text-xs font-bold">my-id-name</h1>
                    {/* name  */}
                    <p className="font-light text-xs">Follows you</p>
                  </div>
                </div>

                <p className="font-bold text-blue-400 text-xs ">Follow</p>
              </div>
              <div className="person flex flex-row justify-between items-center px-4  mt-2">
                <div className="flex flex-row justify-between">
                  <Image
                    src={"/images/par.jpg"}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full h-12"
                  />
                  <div className="flex flex-col justify-center  mx-4">
                    {/*id name  */}
                    <h1 className="text-xs font-bold">my-id-name</h1>
                    {/* name  */}
                    <p className="font-light text-xs">Follows you</p>
                  </div>
                </div>

                <p className="font-bold text-blue-400 text-xs ">Follow</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center px-4 py-1  mt-5">
              <p className="text-xs text-gray-400">
                About Help Press API Jobs Privacy Terms Locations Language Meta
                Verified
              </p>
            </div>
            <div className="flex flex-row justify-between items-center px-4 py-1  mt-4">
              <p className="text-xs  text-gray-400">
                © 2023 INSTAGRAM FROM META{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
