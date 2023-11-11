import { Link } from "react-router-dom";


const BlogCard = ({blogByUser}) => {
    const {    name,_id,
        title,
        shortDes,
        longDes,
        category,
        photo,}=blogByUser;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h1 className="text-2xl text-yellow-800">{name}</h1>
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl">Category:{category}</h3>
        <p className="text-xl text-orange-500">{shortDes}</p>
        <p className="text-xl text-yellow-700">{longDes}</p>
        <div className="flex justify-center card-actions ">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-success">Details</button>
          </Link>
          <Link to={`/wishlist/${_id}`}>
            <button className="btn btn-xs sm:btn-sm md:btn-md btn-success">WishList</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default BlogCard;