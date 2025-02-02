import { Product } from "@/services/types"
import { useMemo } from "react"
import { useSearchParams } from "react-router"

export function useSorting(filteredProducts: Product[]) {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortOption = searchParams.get("sort") || ""

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]

    switch (sortOption) {
      case "asc":
        sorted.sort((a: Product, b: Product) =>
          (a.title ?? "").localeCompare(b.title ?? "")
        )
        break
      case "desc":
        sorted.sort((a: Product, b: Product) =>
          (b.title ?? "").localeCompare(a.title ?? "")
        )
        break
      case "price-asc":
        sorted.sort((a: Product, b: Product) => {
          const priceA = a.price ?? 0
          const priceB = b.price ?? 0
          return priceA - priceB
        })
        break
      case "price-desc":
        sorted.sort((a: Product, b: Product) => {
          const priceA = a.price ?? 0
          const priceB = b.price ?? 0
          return priceB - priceA
        })
        break
      default:
        break
    }

    return sorted
  }, [filteredProducts, sortOption])

  const setSortOption = (option: string) => {
    searchParams.set("sort", option)
    setSearchParams(searchParams, {
      replace: true,
    })
  }

  return {
    sortedProducts,
    sortOption,
    setSortOption,
  }
}
