
import { DashboardLayout } from "@/src/Dashboard/Innovators/components/dashboardComponent";



export default function RootLayout({ children }) {
  return (
    <>
        <DashboardLayout >
        {children}
        </DashboardLayout>
    </>
  );
}