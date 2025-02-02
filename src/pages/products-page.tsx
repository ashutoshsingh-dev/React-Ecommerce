import Productlist from "@/components/sections/product-list"
import { Loader } from "@/components/ui/loader"
import { useGetCategories, useGetProducts } from "@/services/use-product"

export default function ProductsPage() {
  const {
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
    data: categories,
  } = useGetCategories()

  const { isLoading, isError, error, data: products } = useGetProducts()

  if (isLoading || isLoadingCategories) {
    return <Loader size="2xl" />
  }

  if (isError || isErrorCategories) {
    const errorMessage =
      error?.message || "An error occurred while fetching products."
    return <div>Error: {errorMessage}</div>
  }

  if (!products || products.length === 0) {
    return <div>No products found.</div>
  }
  return (
    <section className="pt-[var(--header-height)]">
      <Productlist categories={categories} products={products} />
    </section>
  )
}
