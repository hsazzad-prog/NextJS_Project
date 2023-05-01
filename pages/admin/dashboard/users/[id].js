import MyLayout from "@/pages/component/layout"
import axios from "axios";
import { useRouter } from 'next/router'
import UserLayout from "@/pages/component/userlayout";
import SessionCheck from '../../../component/sessioncheck'
import AdminDrawer from '../../../component/admindrawer'

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck />
      <MyLayout title={data.id} />
      <AdminDrawer />

      <UserLayout data={data} />

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get('https://nestjsproject-production-364f.up.railway.app/admin/findadmin/' + id);
  const data = await response.data;

  return { props: { data } }
}
