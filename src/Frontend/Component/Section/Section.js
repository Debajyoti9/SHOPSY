import React from "react";
import BabySection from "../BabySection/BabySection";
import BlogSection from "../BlogSection/BlogSection";
import Contact from "../Contact/Contact";
import MenSection from "../MenSection/MenSection";
import TrendingSection from "../Trending Section/TrendingSection";
import WomenSection from "../WomenSection/WomenSection";

function Section({ id }) {
  return (
    <div class="section" id={id}>
      {id === "Men" ? (
        <>
          <h1>{id} Section</h1>
          <MenSection />
        </>
      ) : id === "Women" ? (
        <>
          <h1>{id} Section</h1>
          <WomenSection />
        </>
      ) : id === "Baby" ? (
        <>
          <h1>{id} Section</h1>
          <BabySection />
        </>
      ) : id === "Trending" ? (
        <>
          <h1>{id} Section</h1>
          <TrendingSection />
        </>
      ) : id === "Blogs" ? (
        <>
          <h1>{id} Section</h1>
          <BlogSection />
        </>
      ) : (
        <>
          <h1>{id}Section</h1>
          <Contact />
        </>
      )}
    </div>
  );
}

export default Section;
