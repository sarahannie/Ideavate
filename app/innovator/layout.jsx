import { TopNavbar } from "@/src/Dashboard/Innovators/components/navbar";
import { Sidebar } from "@/src/Dashboard/Innovators/components/sidebar";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"


export default async function DashboardLayout({ children }) {
//     const session = await getServerSession(authOptions)

//   if (!session) {
//     redirect('/signin')
//   }
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar  />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbar/>
        {children}
      </div>
    </div>
  )
}