import MyLayout from "@/pages/component/layout"
import Link from "next/link"

export default function AdminDashboard() {

    return (
      <>
      <MyLayout title="Admin DashBoard"/>
      <h1>Admin Dashboard</h1>

    <Link href="/admin/dashboard/getusers">See All Users</Link>
    <br></br>
    <Link href="/admin/dashboard/findusers">Find Users by ID</Link>
      </>
    )
  }