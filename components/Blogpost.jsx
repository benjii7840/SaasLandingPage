import React from "react";
import { BlogpostData } from "../DataFile/BlogpostData";

const Blogpost = () => {
  return (
    <section className="mt-20 flex ml-20 ">
      <div className="w-full">
        <div className="flex  justify-between">
          <h2 className="text-4xl font-bold mb-4">Our Blog posts</h2>
          <button className="bg-[#5D5FEF] text-white py-2 px-4 rounded-md hover:bg-[#4a4bd0] mr-5 text-sm">
            See All Blog Posts
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {BlogpostData.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-sm text-gray-500 mb-2">{`${post.Date.day} ${post.Date.month} ${post.Date.year}`}</h2>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogpost;
