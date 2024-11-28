import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogContent(filename) {
  const blogPath = path.join(process.cwd(), "public", "blog", filename); // Updated to use 'public/blog'
  const fileContents = fs.readFileSync(blogPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getBlogMetadata() {
  const dataPath = path.join(process.cwd(), "public", "blogdetails.json");
  const fileContents = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(fileContents);
}

export function getBlogByCatagory(catagory){
  const dataPath = path.join(process.cwd(), "public", "blogdetails.json");
  const fileContents = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(fileContents);
}