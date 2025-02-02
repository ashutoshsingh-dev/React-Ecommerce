import RootLayout from "@/components/layouts/root-layout"
import AboutPage from "@/pages/about-page"
import HomePage from "@/pages/home-page"
import { Route, Routes } from "react-router"
import ProductsPage from "./pages/products-page"

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  )
}
