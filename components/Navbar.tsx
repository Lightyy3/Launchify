import Link from "next/link";

import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-6 py-4 bg-[08CDAE] shadow-md font-work-sans border-b border-gray-200 text-3xl">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <svg
            width="250"
            height="50"
            viewBox="0 0 250 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="35"
              fontFamily="Poppins, sans-serif"
              fontSize="32"
              fontWeight="bold"
            >
              <tspan fill="#F97316">Launch</tspan>
              <tspan fill="#FFFFFF">ify</tspan>
            </text>
            <g transform="translate(150,10) scale(0.8) rotate(45, 20, 20)">
              <path
                d="M10 20 L20 10 L30 20"
                stroke="#F97316"
                strokeWidth="4"
                fill="none"
              />
              <path d="M20 10 L20 30" stroke="#F97316" strokeWidth="4" />
            </g>
          </svg>
        </Link>

        <div className="flex items-center gap-6 text-white ">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="flex items-center gap-2 text-lg font-medium hover:text-orange-500 transition-colors"
              >
                <span className="hidden sm:inline">Create your Startup</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className="flex items-center gap-2 text-lg font-medium hover:text-orange-500 transition-colors"
              >
                <button type="submit" className="flex items-center gap-2">
                  <span className="hidden sm:inline">Logout</span>
                  <LogOut className="size-6 sm:hidden text-orange-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`} className="relative">
                <Avatar className="size-10 hover:scale-105 transition-transform">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white text-lg rounded-full shadow hover:bg-orange-700 transition-all"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
