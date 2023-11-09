import React from "react";
import { Article } from "@/app/components";

const Blog = () => {
  return (
    <div id="blog" className="section section-margin mt-20 mb-0">
      <h2 className="gradient__text text-3xl md:text-4xl lg:text-6xl font-extrabold lg:leading-[75px]">
        A lot is happening,
        <br /> We are blogging about it.
      </h2>
      <Article />
    </div>
  );
};

export default Blog;
