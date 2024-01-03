import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="h-screen">
    <UserButton afterSignOutUrl="/"/>
  </div>
  )
}
