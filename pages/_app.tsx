import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import { useStore } from "@/store";
import { useRouter } from "next/router";
import { getUser } from "@/utils/auth";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { init } from "@sentry/next";
import { Integrations } from "@sentry/tracing";

init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

interface MyAppProps extends AppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
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
      <Layout>{<Component {...pageProps} />}</Layout>
    </SessionProvider>
  );
};

export default MyApp;