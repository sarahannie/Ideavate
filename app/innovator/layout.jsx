import { TopNavbar } from "@/src/Dashboard/Innovators/components/navbar";
import { Sidebar } from "@/src/Dashboard/Innovators/components/sidebar";



export default function DashboardLayout({ children }) {
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