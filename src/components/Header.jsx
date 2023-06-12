'use client' 

import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";

function Header () {

    const [LightTheme, setTheme] = useState(true); 

    const changeTheme = () => {
      toggleTheme(!LightTheme); 
      setTheme(!LightTheme); 
    }   
    const toggleTheme = (isLight) => {          
      if (isLight) {
        document.documentElement.classList.remove("dark");  
      }
      else {
        document.documentElement.classList.add("dark");  
      }   
    }

    return (       
      <>
      <nav className="bg-gray-50 dark:bg-gray-700 dark:text-white">
          <div className="max-w-screen-xl px-4 py-3"> 
              <div className="flex items-center justify-between">
                  <h2 className="font-mono">Fruit-Joy</h2>
                  <div className="flex links-and-buttons items-center"> 
                    <ul className="flex flex-row font-medium mt-0 mr-10 space-x-8 text-sm">
                        <li>
                          <Link href="/"><p className="text-gray-900 opacity-80 ease-in duration-300 hover:opacity-100 hover:scale-125 dark:text-white">Home</p></Link> 
                        </li>
                        <li>
                          <Link href="/characters"><p className="text-gray-900 opacity-80 ease-in duration-300 hover:opacity-100 hover:scale-125 dark:text-white">Fruits</p></Link> 
                        </li>
                    </ul>      
                    <Button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                      function={changeTheme} 
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Change theme
                      </span>
                    </ Button> 
                    {/* <button
                      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"  
                      onClick={changeTheme}   
                    >     
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Change theme
                      </span>
                    </button> */}
                  </div>
              </div>
          </div>
      </nav>
      </>
    );
}

export default Header; 