import { useQuery } from "@tanstack/react-query"
import { apiClient } from "./api"

export function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => apiClient.get("/products", {}).then((res) => res.data),
  })
}

export function useGetCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      apiClient.get("/products/categories").then((res) => res.data),
  })
}
