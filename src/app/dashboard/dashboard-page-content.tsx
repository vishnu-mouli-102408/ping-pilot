"use client"

import { LoadingSpinner } from "@/components/LoadingSpinner"
import { Button, buttonVariants } from "@/components/ui/button"
import { client } from "@/lib/client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { format, formatDistanceToNow } from "date-fns"
import Link from "next/link"

import { Modal } from "@/components/modals/modal"
import { ArrowRight, BarChart2, Clock, Database, Trash2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { DashboardEmptyState } from "./dashboard-empty-state"

const DashboardPageContent = () => {
  const [deletingCategory, setDeletingCategory] = useState<string | null>(null)

  const queryClient = useQueryClient()

  const { data: categories, isPending: isEventCategoriesLoading } = useQuery({
    queryKey: ["user-event-categories"],
    queryFn: async () => {
      const response = await client.category.getEventCategories.$get()
      const { categories } = await response.json()
      return categories
    },
  })

  const { mutate: deleteCategory, isPending: isDeletingCategory } = useMutation(
    {
      mutationFn: async (name: string) => {
        await client.category.deleteCategory.$post({ name })
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["user-event-categories"],
        })
        toast.success("Event Deleted Successfully", {
          duration: 3000,
          position: "bottom-center",
        })
        setDeletingCategory(null)
      },
      onError: (error) => {
        // Handle error
        toast.error("Failed to Delete Event", {
          duration: 3000,
          position: "bottom-center",
          description:
            `${error?.message}` || "Internal Server Error. Please try again",
        })
      },
    }
  )

  if (isEventCategoriesLoading) {
    return (
      <div className="flex items-center justify-center flex-1 w-full h-full">
        <LoadingSpinner />
      </div>
    )
  }

  if (!categories || categories.length === 0) {
    return (
      // <div className="flex items-center justify-center flex-1 w-full h-full">
      //   <p className="text-gray-400 text-lg">No categories found</p>
      // </div>
      <DashboardEmptyState />
    )
  }

  return (
    <>
      <ul className="grid max-w-6xl grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((category) => (
          <li
            key={category.id}
            className="relative group z-10 transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="absolute z-0 inset-px rounded-lg bg-[#001219]" />

            <div className="pointer-events-none z-0 absolute inset-px rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md ring-1 ring-black/5" />

            <div className="relative p-6 z-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="size-12 text-2xl rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: category.color
                      ? `#${category.color.toString(16).padStart(6, "0")}`
                      : "#2d3142",
                  }}
                >
                  {category.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3 className="text-lg/7 font-medium tracking-tight text-[#edf2f4]">
                    {category.emoji || "📂"} {category.name}
                  </h3>
                  <p className="text-sm/6 text-gray-400">
                    {format(category.createdAt, "MMM d, yyyy")}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm/5 text-[#e5e5e5]">
                  <Clock className="size-4 mr-2 text-brand-500" />
                  <span className="font-medium">Last ping:</span>
                  <span className="ml-1">
                    {category.lastPing
                      ? formatDistanceToNow(category.lastPing) + " ago"
                      : "Never"}
                  </span>
                </div>
                <div className="flex items-center text-sm/5 text-[#e5e5e5]">
                  <Database className="size-4 mr-2 text-brand-500" />
                  <span className="font-medium">Unique fields:</span>
                  <span className="ml-1">{category.uniqueFieldCount || 0}</span>
                </div>
                <div className="flex items-center text-sm/5 text-[#e5e5e5]">
                  <BarChart2 className="size-4 mr-2 text-brand-500" />
                  <span className="font-medium">Events this month:</span>
                  <span className="ml-1">{category.eventsCount || 0}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <Link
                  href={`/dashboard/category/${category.name}`}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className:
                      "flex text-gray-200 bg-[#003049] hover:bg-[#162340] hover:text-gray-100 border-none items-center gap-2 text-sm",
                  })}
                >
                  View all <ArrowRight className="size-4" />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 bg-[#003049] hover:bg-[#14213d] hover:text-red-600 transition-colors"
                  aria-label={`Delete ${category.name} category`}
                  onClick={() => setDeletingCategory(category.name)}
                >
                  <Trash2 className="size-5 " />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        showModal={!!deletingCategory}
        setShowModal={() => setDeletingCategory(null)}
        className="max-w-md p-8 bg-[#233d4d] border-none"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-lg/7 font-medium tracking-tight text-[#fdfffc]">
              Delete Category
            </h2>
            <p className="text-sm/6 text-[#cfdbd5]">
              Are you sure you want to delete the category {deletingCategory}?
              This action cannot be undone.
            </p>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-[#adb5bd]">
            <Button
              variant="outline"
              className="bg-[#22333b] hover:text-gray-200 border-none hover:bg-[#1d2c34]"
              onClick={() => setDeletingCategory(null)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                deletingCategory && deleteCategory(deletingCategory)
              }
              disabled={isDeletingCategory}
            >
              {isDeletingCategory ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DashboardPageContent
