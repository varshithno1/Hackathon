import React, { useState } from "react";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          {/* Sidebar content */}
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <i className="bi bi-person"></i>
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                Event manager Panel
              </h1>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
                onClick={openSidebar}
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
            {/* Add your sidebar menu items here */}
          </div>
        </div>
        <div className="content">
          <header>
            {/* Header content */}
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back <i className="bi bi-rocket"></i>, Event Manager
                    Panel!
                  </h1>
                  <p className="mt-1.5 text-sm text-gray-500">
                    Let's write a new blog post!{" "}
                  </p>
                </div>
                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                  <button className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring">
                    Upload Post <i className="fas fa-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  {/* Your form and summernote integration here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
