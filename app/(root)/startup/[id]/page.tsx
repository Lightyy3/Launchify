/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import {
  PLAYLIST_BY_SLUG_QUERY,
  STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

const md = markdownit();

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post, { select: editorPosts }] = await Promise.all([
    client.fetch(STARTUP_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editor-picks",
    }),
  ]);

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px] py-12 my-5">
        <p className="tag2 py-12 mb-6">{formatDate(post?._createdAt)}</p>
        <h1 className="tag2 py-6 mb-6">{post.title}</h1>
        <p className="tag2 py-6 !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container flex flex-wrap lg:flex-nowrap gap-6">
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={post.image}
            alt="thumbnail"
            className="w-full h-[500px] object-cover rounded-xl" // Set a fixed height to limit the size
          />
        </div>

        {/* Right side: Post Information */}
        <div className="w-full lg:w-1/2 max-w-4xl mx-auto tag2">
          <div className="flex gap-4 items-center mb-4">
            {" "}
            {/* Reduced gap and margin */}
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center"
            >
              <Image
                src={post.author.image}
                alt="avatar"
                width={50} // Reduced width of the avatar
                height={50} // Reduced height of the avatar
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-lg font-semibold">{post.author.name}</p>{" "}
                {/* Reduced text size */}
                <p className="text-sm !text-black">
                  @{post.author.username}
                </p>{" "}
                {/* Reduced text size */}
              </div>
            </Link>
            <p className="category-tag text-sm">{post.category}</p>{" "}
            {/* Reduced font size */}
          </div>
          <h3 className="text-xl font-bold">Pitch Details</h3>{" "}
          {/* Reduced font size */}
          {parsedContent ? (
            <article
              className="prose text-sm max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result text-sm">No details provided</p>
          )}
        </div>
      </section>

      <hr className="divider" />

      {editorPosts?.length > 0 && (
        <div className="max-w-4xl mx-auto ">
          <p className="font-semibold text-[30px]  text-white">Editor Picks</p>

          <ul className="mt-7 card_grid-sm">
            {editorPosts.map((post: StartupTypeCard, i: number) => (
              <StartupCard key={i} post={post} />
            ))}
          </ul>
        </div>
      )}

      <Suspense fallback={<Skeleton className="view_skeleton" />}>
        <View id={id} />
      </Suspense>
    </>
  );
};

export default Page;
