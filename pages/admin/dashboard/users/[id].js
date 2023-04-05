import MyLayout from "@/pages/component/layout"
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'

export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout title="User"/>
   

      <h1>Name: {data.name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Address: {data.address}</h1>
      <h1>Picture: </h1>
      <Image src={"http:/localhost:3000/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
     <br></br>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('http://localhost:3000/admin/findadmin/'+id);
    const data = await response.data;
   
return { props: { data } }
}