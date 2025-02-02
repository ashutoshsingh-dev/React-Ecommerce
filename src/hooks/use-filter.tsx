import { Product } from "@/services/types"
import { useMemo } from "react"
import { useSearchParams } from "react-router"

export function useFilter(products: Product[]) {
  const [searchParams, setSearchParams] = useSearchParams()

  const selectedCategories = useMemo(() => {
    const categories = searchParams.get("category") || ""
    return categories ? categories.split(",") : []
  }, [searchParams])

  const selectedCategorySet = useMemo(
    () => new Set(selectedCategories),
    [selectedCategories]
  )

  const handleCheckboxChange = (category: string) => {
    const isAlreadySelected = selectedCategorySet.has(category)
    const newCategories = isAlreadySelected
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]

    if (newCategories.length === 0) {
      setSearchParams({}, { replace: true })
    } else {
      setSearchParams({ category: newCategories.join(",") }, { replace: true })
    }
  }

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return []

    return products.filter(
      (product: Product) =>
        selectedCategories.length === 0 ||
        selectedCategorySet.has(product.category)
    )
  }, [products, selectedCategorySet, selectedCategories])

  return {
    filteredProducts,
    selectedCategories,
    handleCheckboxChange,
  }
}
