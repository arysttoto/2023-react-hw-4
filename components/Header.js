import Link from "next/link";

function Header () {
    return (       
      <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto"> 
              <div className="flex items-center">
                  <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                      <li>
                        <Link href="/"><p className="text-gray-900 hover:underline">Home</p></Link> 
                      </li>
                      <li>
                        <Link href="/characters"><p className="text-gray-900 hover:underline">Characters</p></Link> 
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
}

export default Header; 