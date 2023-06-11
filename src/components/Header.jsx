import Link from "next/link";

function Header () {
    return (       
      <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3"> 
              <div className="flex items-center justify-between">
                  <h2 className="font-mono">Fruit-Joy</h2>
                  <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                      <li>
                        <Link href="/"><p className="text-gray-900 opacity-80 ease-in duration-300 hover:opacity-100 hover:scale-125">Home</p></Link> 
                      </li>
                      <li>
                        <Link href="/characters"><p className="text-gray-900 opacity-80 ease-in duration-300 hover:opacity-100 hover:scale-125">Fruits</p></Link> 
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
}

export default Header; 