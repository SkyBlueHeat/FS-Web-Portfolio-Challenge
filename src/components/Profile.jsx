// src/components/Profile.jsx
import React from "react";

const Profile = ({ user }) => {
    user = {
        dogumTarihi: "John Doe",
        email: "john.doe@example.com",
        job: "Software Developer",
        city: "San Francisco",
        memberSince: "2022",
    }
  return (

 <>
      

   <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full flex space-x-2">
   <div class="hidden relative lg:block  lg:col-span-3 ml-52">
   <h2 class="text-5xl font-bold mb-20  ">Profile</h2>
   <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
    
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-3xl leading-6 font-normal text-blue-800">
            Profile
        </h3>
        
    </div>
    <div class="border-t border-gray-200">
        <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <h1 class="text-sm font-medium text-gray-500">
                    Birth Date
                </h1>
                <p class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    18.01.1999
                </p>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <h1 class="text-sm font-medium text-gray-500">
                City of Residence
                </h1>
                <p class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Ankara
                </p>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <h1 class="text-sm font-medium text-gray-500">
                Educational Status
                </h1>
                <p class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Ufuk University - Computer Programing
                </p>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <h1 class="text-sm font-medium text-gray-500">
                Preferred Role
                </h1>
                <p class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Frontend, UI
                </p>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <h1 class="text-sm font-medium text-gray-500">
            Hobbies
                </h1>
                <p class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Playing electric guitar. swimming, extreme
sports are interested.(Cross, Downhill
skateboarding)
                </p>
            </div>
        </dl>
    </div>
</div>
      </div>
      <div class=" px-10  py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
        <h1 class="font-semibold text-4xl mt-40 text-blue-800 ">About Me</h1>
       
        <h1 class="text-lg text-gray-600 text-justify pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h1>
        <h1 class="text-lg text-gray-600 text-justify pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h1>
        
      </div>

      
    </div>

</>
  );
};

export default Profile;
