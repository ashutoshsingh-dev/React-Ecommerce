import { ModeToggle } from "@/components/ui/mode-toggle"
import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Button } from "../ui/button"

interface UserProfile {
  name: string
  email: string
  picture: string
}

export default function SiteHeader() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    const savedUserProfile = localStorage.getItem("userProfile")
    const parsedUserProfile = savedUserProfile
      ? JSON.parse(savedUserProfile)
      : null
    if (parsedUserProfile) {
      setUserProfile(parsedUserProfile)
    }
  }, [])

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Login successful:", tokenResponse)

      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        )

        const user = {
          name: res.data.name,
          email: res.data.email,
          picture: res.data.picture,
        }

        setUserProfile(user)
        localStorage.setItem("userProfile", JSON.stringify(user))
      } catch (error) {
        console.error("Error fetching user info:", error)
      }
    },
    onError: () => {
      console.log("Login Failed")
    },
  })

  // Handle logout
  const handleLogout = () => {
    setUserProfile(null)
    localStorage.removeItem("userProfile")
  }

  return (
    <header className="fixed z-50 w-full border-b bg-background">
      <div className="container flex h-[var(--header-height)] items-center justify-between">
        <Link to="/" className="logo">
          React Ecommerce
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/products">Products</Link>
          <ModeToggle />

          {userProfile ? (
            <div>
              <span>Welcome, {userProfile.name}!</span>
              <button
                onClick={handleLogout}
                className="ml-4 bg-red-500 p-2 text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Button onClick={() => login()}>Register / login</Button>
          )}
        </div>
      </div>
    </header>
  )
}
