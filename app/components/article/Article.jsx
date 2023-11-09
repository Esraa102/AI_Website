import React from "react";
import "./article.css";
import Image from "next/image";
import BlogOne from "../../assets/blog01.png";
import BlogTwo from "../../assets/blog02.png";
import BlogThree from "../../assets/blog03.png";
import BlogFour from "../../assets/blog04.png";
import BlogFive from "../../assets/blog05.png";
const Article = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 mb-20">
      <div className="lg:row-span-2">
        <Image src={BlogOne} alt="" className="lg:h-[40%]"></Image>
        <div className="article-des flex flex-col justify-between lg:h-[60%]">
          <div>
            <p className="article-date">Sep 26, 2023</p>
            <h4 className="article-header">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h4>
          </div>
          <p className="article-read-all">Read Full Article</p>
        </div>
      </div>
      <div className="">
        <Image src={BlogTwo} alt=""></Image>
        <div className="article-des">
          <p className="article-date">Sep 26, 2023</p>
          <h4 className="article-header">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h4>
          <p className="article-read-all">Read Full Article</p>
        </div>
      </div>
      <div className="">
        <Image src={BlogThree} alt=""></Image>
        <div className="article-des">
          <p className="article-date">Sep 26, 2023</p>
          <h4 className="article-header">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h4>
          <p className="article-read-all">Read Full Article</p>
        </div>
      </div>
      <div className="">
        <Image src={BlogFour} alt=""></Image>
        <div className="article-des">
          <p className="article-date">Sep 26, 2023</p>
          <h4 className="article-header">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h4>
          <p className="article-read-all">Read Full Article</p>
        </div>
      </div>
      <div className="">
        <Image src={BlogFive} alt=""></Image>
        <div className="article-des">
          <p className="article-date">Sep 26, 2023</p>
          <h4 className="article-header">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h4>
          <p className="article-read-all">Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
