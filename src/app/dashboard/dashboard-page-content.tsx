"use client"

import { LoadingSpinner } from "@/components/LoadingSpinner"
import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"

const DashboardPageContent = () => {
  const { data: categories, isPending: isEventCategoriesLoading } = useQuery({
    queryKey: ["user-event-categories"],
    queryFn: async () => {
      const response = await client.category.getEventCategories.$get()
      const { categories } = await response.json()
      return categories
    },
  })

  if (isEventCategoriesLoading) {
    return (
      <div className="flex items-center justify-center flex-1 w-full h-full">
        <LoadingSpinner />
      </div>
    )
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="flex items-center justify-center flex-1 w-full h-full">
        <p className="text-gray-400 text-lg">No categories found</p>
      </div>
    )
  }

  return (
    <ul className="grid max-w-6xl grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {categories.map((category) => (
        <li
          className="relative group z-10 transition-all duration-200 hover:-translate-y-0.5"
          key={category.id}
        ></li>
      ))}
    </ul>
  )
}

export default DashboardPageContent
