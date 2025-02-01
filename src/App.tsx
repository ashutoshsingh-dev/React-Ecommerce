import { Routes, Route } from "react-router";
import HomePage from "@/pages/home-page";
import AboutPage from "@/pages/about-page";
import RootLayout from "@/components/layouts/root-layout";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
