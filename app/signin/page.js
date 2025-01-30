import Signin from "@/src/Landingpages/layout/signin";
import { Suspense } from "react"
export const metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
}

export default function Signups() {
    return (
      <div className="">
      <Suspense fallback={<div>Loading...</div>}>
          <Signin/>
      </Suspense>
      </div>
    );
  }