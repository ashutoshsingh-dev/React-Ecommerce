import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function SiteHeader() {
  return (
    <header className="shadow">
      <div className="container flex items-center justify-between h-[var(--header-height)]">
        <Link to="/" className="logo">
          React Ecommerce
        </Link>
        <Button>Register / Login</Button>
      </div>
    </header>
  );
}
