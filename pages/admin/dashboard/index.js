import MyLayout from "@/pages/component/layout"
import Link from "next/link"
import SessionCheck from '../../component/sessioncheck'

export default function AdminDashboard() {

    return (
      <>
        <SessionCheck />
      <MyLayout title="Admin DashBoard"/>
      <h1>Admin Dashboard</h1>

    <Link href="/admin/dashboard/getusers">See All Users</Link>
    <br></br>
    <Link href="/admin/dashboard/findusers">Find Users by ID</Link>
    <br></br>
    <Link href="/admin/dashboard/addadmin">Add Admin</Link>
      </>
    )
  }