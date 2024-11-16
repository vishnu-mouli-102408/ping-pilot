import { SignIn } from "@clerk/nextjs"

function Page() {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn />
    </div>
  )
}

export default Page
