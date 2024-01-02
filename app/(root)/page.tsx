import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="">
    <h1>Ecommerce Dashboard</h1>
    <Alert>
 
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
<Button >Submit</Button>
    </main>
  )
}
