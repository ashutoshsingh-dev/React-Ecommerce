import ImageLoader from "@/components/common/image-loader"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Product } from "@/services/types"
import { Eye, Heart, RefreshCcw, ShoppingCart, Star } from "lucide-react"

export default function ProductCard({ product }: { product: Product }) {
  const handleAddToWishlist = (productId: number) =>
    alert(`Product ${productId} added to wishlist.`)
  const handleAddToCompare = (productId: number) =>
    alert(`Product ${productId} added to compare.`)
  const handleAddToCart = (productId: number, productTitle: string) =>
    alert(`Product ${productId} - ${productTitle} added to cart.`)

  return (
    <>
      <div
        key={product.id}
        className="group relative flex cursor-pointer flex-col items-start overflow-hidden border pb-2 dark:bg-muted"
        title={product.title}
      >
        <div className="mx-auto flex max-h-[220px] min-h-[220px] items-center">
          <ImageLoader
            className="h-full w-full object-contain p-6"
            src={product.image}
            alt={product.title}
          />
        </div>
        <Badge className="absolute left-2.5 top-2.5 gap-1 rounded-full bg-primary/60 shadow-none backdrop-blur">
          <Star className="size-3" />
          {product.rating.rate}
        </Badge>
        <div className="visible absolute right-2.5 top-2.5 z-40 flex flex-col gap-1 text-xs opacity-100 duration-300 group-hover:visible group-hover:opacity-100 md:text-sm lg:invisible lg:text-xl lg:opacity-0">
          <Button
            variant="secondary"
            className="size-8 rounded-full"
            title="Wishlist"
            onClick={() => handleAddToWishlist(product.id)}
          >
            <Heart aria-label="Wishlist" className="size-4" />
          </Button>
          <Button
            variant="secondary"
            className="size-8 rounded-full"
            title="Compare"
            onClick={() => handleAddToCompare(product.id)}
          >
            <RefreshCcw aria-label="Compare" className="size-4" />
          </Button>

          <Button
            variant="secondary"
            title="Quick Overview"
            className="size-8 rounded-full"
            onClick={() => alert("Quick Overview")}
          >
            <Eye aria-label="Quick Overview" className="size-4" />
          </Button>
        </div>

        <div className="flex w-full flex-grow flex-col overflow-hidden px-2">
          <h2 className="line-clamp-2 text-sm font-medium">{product.title}</h2>
          <div className="mt-2 flex flex-1 flex-wrap items-end justify-between gap-x-2 font-semibold">
            <span className="inline-block">${product.price}</span>

            <Button
              className="size-5 h-auto rounded-full leading-none shadow-none"
              onClick={() => handleAddToCart(product.id, product.title)}
            >
              <ShoppingCart aria-label="Quick Overview" className="" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
