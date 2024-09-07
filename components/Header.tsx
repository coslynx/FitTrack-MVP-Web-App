import Link from "next/link";
import { useSession } from "next-auth/react";
import { useStore } from "@/store";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useRouter } from "next/router";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const { setNotification } = useStore();
  const { data: session } = useSession();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  const handleLogout = async () => {
    try {
      await session?.user.signOut();
      setIsLoggedIn(false);
      router.push("/login");
    } catch (error: any) {
      setNotification({
        message: error.message,
        type: "error",
      });
    }
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">FitTrack</a>
        </Link>

        <nav className="flex gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard">
                <a className="hover:text-primary">Dashboard</a>
              </Link>
              <Button onClick={handleLogout} label="Logout" type="secondary" />
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="hover:text-primary">Login</a>
              </Link>
              <Link href="/register">
                <a className="hover:text-primary">Register</a>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;