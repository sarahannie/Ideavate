
import { DashboardLayout } from "@/src/Dashboard/Experts/components/dashboardComponent";



export default function RootLayout({ children }) {
  return (
    <>
        <DashboardLayout >
        {children}
        </DashboardLayout>
    </>
  );
}