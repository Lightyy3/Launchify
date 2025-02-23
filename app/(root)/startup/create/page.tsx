import StartupForm from "@/components/StartupForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="flex flex-wrap justify-center lg:justify-between items-center text-black px-4 sm:px-8 py-6 rounded-xl shadow-lg">
        {/* Left Side: Title */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-8">
            Share your Startup <span className="text-orange-500">with us</span>
          </h1>
        </div>

        {/* Right Side: Startup Form */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <StartupForm />
        </div>
      </section>
    </>
  );
};

export default Page;
