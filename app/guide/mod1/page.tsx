"use client";

import { useState } from "react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";

export default function Component() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <div className="hidden md:block w-full">
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden w-full fixed top-0 right-0 mt-5 z-50 pl-6 items-end">
        <MobileNav />
      </div>
      <div className="grid gap-8 px-4 pt-10 pb-8 mx-auto max-w-7xl dark:bg-gray-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Learn with Our Tutorials</h1>
          <p className="max-w-3xl mx-auto mt-4 text-gray-400">
            Dive into our comprehensive collection of tutorials and master new skills. From beginner to advanced, we've
            got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { id: "SfH0lVOWXks?si=42H5LlxedJ8drHZu", title: "Hanlun Coaching", img: '/' },
            { id: "hJp87ypXko8?si=5nWFohrixCW0QkvV", title: "Hanlun Coaching Pt 2.", img: '/' },
          ].map((video, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-video"
              onClick={() => setSelectedVideo(video.id)}
            >
              <img
                src={video.img}
                alt={video.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="text-lg font-bold text-white">{video.title}</h3>
                <div className="flex items-center justify-center bg-black/50 rounded-full w-10 h-10 mt-2">
                  <PlayIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="rounded-lg w-full">
            <div className="mt-4 aspect-video rounded-lg overflow-hidden w-full">
              {selectedVideo ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400">Select a video to watch</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
