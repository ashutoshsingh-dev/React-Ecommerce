import SiteHeader from "@/components/common/site-header"
import { Outlet } from "react-router"

export default function RootLayout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </>
  )
}
