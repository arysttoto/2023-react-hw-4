import getAllFruits from "./getFruits";
import Link from "next/link";

async function Fruits () { 
    const fruits = await getAllFruits();  
    return (
        <> 
        <div className="cards bg-gradient-to-r from-sky-500 to-indigo-500">
            <h1 className="p-5 text-center text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-black">Our Fruits</h1>
            <div className="text-center">
                {fruits.map((fruit, index) => (    
                    //
                    <div key={index} className="inline-block m-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{fruit.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Need info like price, photo and etc? Click the button below!</p>
                        <Link href={"/characters/"+(fruit.product_url.match(/\d+/g))} className="inline-flex items-center text-blue-600 hover:underline">
                            More Info
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                        </Link>
                    </div>
                    //
                ))}
            </div> 
        </div>
        </>
    );
}

export default Fruits;     