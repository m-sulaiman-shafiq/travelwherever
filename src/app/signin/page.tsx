"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button onClick={() => signIn("google")}>
        Sign in with Google
      </Button>
    </div>
  )
}