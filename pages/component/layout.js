import Header from "./header"
import Link from "next/link"
import Image from 'next/image'
import Session from "./session"

export default function MyLayout(props)   
{
   
    return(
        <>
            <Header title={props.title} />
         
            <nav>
            <Image src="/ico.png" alt="me" width="64" height="64" />
        <Link href="/"> Home </Link>
                <Link href="/about"> About Us </Link>
            <Session />
            </nav>
          
        
        <main>

        </main>
        <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            Abc Ecommerce @copyright</div>
        </>
    )
}