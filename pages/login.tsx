import { signIn, useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "@/store";
import { AiOutlineLogin } from "react-icons/ai";
import Button from "@/components/Button";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const router = useRouter();
  const { setNotification } = useStore();
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (session) {
        router.push("/dashboard");
      }
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-primary">Login</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-bold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button
            type="primary"
            label={isLoading ? "Loading..." : "Login"}
            icon={isLoading ? null : <AiOutlineLogin />}
            disabled={isLoading}
          />
        </form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <Link href="/register">
              <a className="text-primary hover:text-secondary">Register</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;