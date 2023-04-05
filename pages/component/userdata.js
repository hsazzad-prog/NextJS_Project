
import Image from 'next/image'

export default function UserLayout({data})   
{
    return(
        <>
      
      <h1>Name: {data.name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Address: {data.address}</h1>
      <h1>Picture: </h1>
      <Image src={"http:/localhost:3000/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
        </>
    )
}