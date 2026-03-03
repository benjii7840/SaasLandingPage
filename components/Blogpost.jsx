import React from "react";
import { BlogpostData } from "../DataFile/BlogpostData";
import { BlogpostData2 } from "../DataFile/BlogpostData2";

const Blogpost = () => {
  return (
    <section className="mt-20 px-4 sm:px-8 lg:px-20">
      <div className="w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Blog posts</h2>
          <button className="bg-[#5D5FEF] text-white py-2 px-4 rounded-md hover:bg-[#4a4bd0] text-sm">
            See All Blog Posts
          </button>
        </div>

        {/* Main Grid: 2 big posts on left, smaller posts on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Left Side: 2 Big Posts from BlogpostData */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {BlogpostData.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {`${post.Date.day} ${post.Date.month} ${post.Date.year}`}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Smaller Posts from BlogpostData2 with separators */}
          <div className="lg:col-span-1 flex flex-col">
            {BlogpostData2.map((post, index) => (
              <div key={post.id}>
                {/* Post Content */}
                <div className="flex flex-row gap-4 py-4">
                  {/* Image on the left */}
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-24 h-24 rounded-md object-cover flex-shrink-0"
                  />

                  {/* Content on the right */}
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-gray-500 mb-1">
                      {`${post.Date.day} ${post.Date.month} ${post.Date.year}`}
                    </p>
                    <h3 className="text-base font-bold mb-1">{post.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.content}
                    </p>
                  </div>
                </div>

                {/* Separator Line - only show if not the last item */}
                {index < BlogpostData2.length - 1 && (
                  <div className="border-b border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogpost;
