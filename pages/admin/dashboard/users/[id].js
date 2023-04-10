import MyLayout from "@/pages/component/layout"
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'
import UserLayout from "@/pages/component/userdata";

export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout title="User"/>
   
<UserLayout data={data} /> 
   
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