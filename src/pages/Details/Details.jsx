import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { name, _id, title, shortDes, longDes, category, photo } = details;
  return (
    <div className="pt-20">
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          Hello Blogger!
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <h2 className="text-3xl text-rose-500 font-bold">{category}</h2>
            <p className="py-6">{longDes}</p>
            <p className="py-6">
              With over 600 million blogs on the internet, you’ve likely
              encountered one or two blogs—you’re even on one right now. But you
              may still wonder what exactly is a blog? How does it differ from a
              website? Why does every business seem to have one? You may even
              ask yourself, how can I start my own blog? In short, many
              individuals and businesses create a blog to share their ideas and
              expertise as well as boost their online presence. This article
              will answer your most pressing blogging questions and help you
              understand how and why blogs succeed, plus show how you can
              utilize them.Blogs are a type of regularly updated websites that provide insight into a certain topic. The word blog is a combined version of the words “web” and “log.” At their inception, blogs were simply an online diary where people could keep a log about their daily lives on the web. They have since morphed into an essential forum for individuals and businesses alike to share information and updates. In fact, many people even make money blogging as professional full-time bloggers. 
            </p>
            <textarea placeholder="Your Comment Here" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <button className="btn btn-success px-10" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
