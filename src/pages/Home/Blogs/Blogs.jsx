import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const allBlogs = useLoaderData();
  return (
    <div className="mt-8"> 
     <div className="text-center">
     <h3 className="text-5xl font-bold text-orange-600">Find The Specific Blogs</h3>
      {/* <h2 className="text-3xl">All Blogs Here</h2> */}
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-3">
     {allBlogs.map((blogByUser) => (
        <BlogCard key={blogByUser._id} blogByUser={blogByUser}></BlogCard>
      ))}
     </div>
    </div>
  );
};

export default Blogs;
