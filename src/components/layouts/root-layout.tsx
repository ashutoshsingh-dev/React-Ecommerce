import { Outlet } from "react-router";
import SiteHeader from "@/components/common/site-header";

export default function RootLayout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
