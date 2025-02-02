import { Checkbox } from "@/components/ui/checkbox"
import { useFilter } from "@/hooks/use-filter"
import { useSorting } from "@/hooks/use-sorting"
import { Category, Product } from "@/services/types"
import ProductCard from "./product-card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSearch } from "@/hooks/use-search"
import { Input } from "../ui/input"

function Productlist({
  categories,
  products,
}: {
  categories: Category[]
  products: Product[]
}) {
  const { filteredProducts, selectedCategories, handleCheckboxChange } =
    useFilter(products)
  const { sortedProducts, sortOption, setSortOption } =
    useSorting(filteredProducts)

  const { searchTerm, handleSearchChange } = useSearch("")

  const filteredAndSearchedProducts = sortedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container flex">
      <aside className="hidden min-h-[calc(100dvh-var(--header-height))] bg-background pb-8 lg:block lg:px-1">
        <div className="sticky top-[calc(var(--header-height)+10px)] w-60 flex-shrink-0">
          <h1 className="text-base capitalize">Filters</h1>
          {categories?.map((category: Category) => (
            <div
              key={category}
              className="mt-2 flex items-center gap-2 px-3 py-1"
            >
              <Checkbox
                className="rounded-none"
                id={category}
                checked={selectedCategories.includes(category)}
                onClick={() => handleCheckboxChange(category)}
              />
              <label
                htmlFor={category}
                className="!m-0 text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </aside>

      <div className="flex-1 py-4">
        <div className="flex flex-wrap items-center gap-2 pb-1">
          <h1 className="capitalize">All Products</h1>

          <div className="ml-auto flex gap-1">
            <Input
              className="w-full lg:max-w-[250px]"
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <Select
              value={sortOption}
              onValueChange={(value) => setSortOption(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
                <SelectItem value="price-asc">Price - Low to High</SelectItem>
                <SelectItem value="price-desc">Price - High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-1 gap-y-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          {filteredAndSearchedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Productlist
