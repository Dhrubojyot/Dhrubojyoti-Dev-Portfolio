import React, { useState, useEffect } from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import Hero from "../hero/Hero";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const [loading, setLoading] = useState(true);

  // Use a timeout to simulate a loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, hide the loader and show the portfolio
    }, 3000); // Set loader time to 3 seconds, adjust as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      {loading ? (
        // Show the Icon Cloud animation while loading
        <IconCloud iconSlugs={slugs} />
      ) : (
        // Show the portfolio content after loading
        <div className="portfolio-content">
          {/* Your portfolio content goes here */}
          <Hero/>
          {/* Other components or content */}
        </div>
      )}
    </div>
  );
}
