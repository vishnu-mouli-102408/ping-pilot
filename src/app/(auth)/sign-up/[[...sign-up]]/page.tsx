import { SignUp } from "@clerk/nextjs"

function Page() {
  return (
    <div className="w-full flex-1 flex min-h-[calc(100vh-72px)] items-center justify-center">
      <SignUp fallbackRedirectUrl="/welcome" forceRedirectUrl="/welcome" />
    </div>
  )
}

export default Page
