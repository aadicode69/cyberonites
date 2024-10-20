import React from "react";

function Grand() {
  return (
    <>
      <div className="flex items-center justify-center my-10">

        <h1 className="text-cyan-400 font-cyberfont font-semibold text-4xl mt-10">
          Grand Events
        </h1>

      </div>
      
      <div className="flex flex-row gap-5 items-center justify-center font-cyberfont">


        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800">
          <a href="#">
            <img class="rounded-t-lg" src="#" alt=""/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Escalate X
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              EscalateX aims to provide participants with hands-on experience in cybersecurity challanged through the CTF  competition and to enrich their understanding with insights from industry experts during the guest lectures.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-400 rounded-lg hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-400 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-600"
            >
              Explore
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>


      </div>
    </>
  );
}

export default Grand;
