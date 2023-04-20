import MyLayout from "@/pages/component/layout"
import Link from "next/link"
import SessionCheck from '../../component/sessioncheck'
import AdminDrawer from '../../component/admindrawer'

export default function AdminDashboard() {
  
  
    return (
      <>
        <SessionCheck />
      
        <MyLayout title="Admin DashBoard" />
   
        <AdminDrawer />
      </>
    )
  }