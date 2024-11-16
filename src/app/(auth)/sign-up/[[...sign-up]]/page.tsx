import { SignUp } from "@clerk/nextjs"

function Page() {
  return (
    <div className="w-full flex-1 flex min-h-[calc(100vh-72px)] items-center justify-center">
      <SignUp />
    </div>
  )
}

export default Page
