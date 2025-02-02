import { useState } from "react"

export function useSearch(initialValue = "") {
  const [searchTerm, setSearchTerm] = useState(initialValue)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return {
    searchTerm,
    handleSearchChange,
  }
}
