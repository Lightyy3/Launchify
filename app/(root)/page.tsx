import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
// import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <section
        className="text-center py-24 px-10 rounded-xl text-black shadow-xl relative text-4xl font-extrabold"

        // style={{
        //   backgroundImage: 'url("/3.jpg")', // Path to your background image
        //   backgroundSize: "cover", // Ensures the image covers the whole section
        //   backgroundPosition: "center", // Centers the image
        // }}
      >
        <h1 className="text-6xl font-extrabold leading-snug">
          Build Your Future, <br />
          <span className="text-orange-500">Innovate with the Best</span>
        </h1>

        <p className="text-xl max-w-2xl mx-auto mt-4">
          Transform your ideas into reality with cutting-edge tools and a
          supportive community. Start with entrepreneurs today and bring your
          vision to <span className="text-orange-500">life!</span>{" "}
        </p>

        <div className="mt-24 text-black flex justify-center">
          <SearchForm
            query={query}
            className="w-full max-w-md align-middle items-center"
          />
        </div>
      </section>

      <section className="container mx-auto py-16 px-6">
        <p className="text-3xl font-semibold mb-8">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="text-white text-4xl text-center col-span-full">
              No startups found
            </p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
