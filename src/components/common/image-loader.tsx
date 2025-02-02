import { Loader } from "@/components/ui/loader"
import { cn } from "@/lib/utils"
import * as React from "react"

interface ImageLoaderProps {
  src: string
  alt?: string
  className?: string
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = React.useState(false)

  const onLoad = React.useCallback(() => {
    setLoaded(true)
  }, [])

  if (!alt) {
    console.warn("Image is missing alt text for accessibility!")
  }

  return (
    <>
      {!loaded && <Loader size="2xl" />}
      <img
        className={cn(className, !loaded && "hidden")}
        onLoad={onLoad}
        src={src}
        alt={alt}
      />
    </>
  )
}

export default ImageLoader
