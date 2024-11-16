import { SignIn } from "@clerk/nextjs"

function Page() {
  return (
    <div className="w-full flex-1 min-h-[calc(100vh-72px)] flex items-center justify-center">
      <SignIn />
    </div>
  )
}

export default Page
