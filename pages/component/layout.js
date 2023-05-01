import Header from "./header"
import Link from "next/link"
import Image from 'next/image'
import Session from "./session"
export default function MyLayout(props)   
{
   
    return(
        <>
            <Header title={props.title} />
         
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 
    <Link href="/" className="flex items-center">
    <Image src="/ico.png" alt="me" width="64" height="64" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ABC Ecommerce</span>
    </Link>
 
                    <Session />
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
     
      <li>
        <Link href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Home </Link>
        </li>
      <li>
   <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> About Us </Link>
     </li>

    </ul>
  </div>
  </div>
</nav>           
        
        <main>

        </main>
 

       
            
        </>
    )
}