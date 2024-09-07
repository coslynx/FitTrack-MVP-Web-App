import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import { useStore } from "@/store";
import { useRouter } from "next/router";
import { getUser } from "@/utils/auth";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const { setNotification } = useStore();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const user = await getUser();
        setSession(user);
      } catch (error: any) {
        setNotification({
          message: error.message,
          type: "error",
        });
      }
    };
    fetchSession();
  }, []);

  useEffect(() => {
    if (!session && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [session, router]);

  return (
    <SessionProvider session={session}>
      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
};

export default Layout;