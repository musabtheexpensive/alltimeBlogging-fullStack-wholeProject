import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
const WishList = () => {
  const wishListBlog = useLoaderData();
  const { title, category, shortDes, photo, _id } = wishListBlog;
  const {user}=useContext(AuthContext);
  const handleWishlistButton = (event) => {
    event.preventDefault();
    const email=user?.email
    const addWishlist = {
      blogPhoto: photo,
      blogName: title,
      email,
      category:category,
      Description:shortDes,
      BlogId:_id,
    };
    console.log(addWishlist);

    fetch("http://localhost:5000/wishlist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addWishlist),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Successfully Added Blog To WishList",
                showConfirmButton: false,
                timer: 1500
              });
          }
        });
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleWishlistButton}>
        <div className="card pt-20 w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img  src={photo} alt="photo" />
          </figure>
          <div className="card-body">
            <h2  className="card-title text-4xl text-red-400">
              {title}
            </h2>
            <p className="text-3xl text-orange-500 font-extralight">
              {shortDes}
            </p>
            <h3 className="text2xl">{category}</h3>
            <div className="card-actions flex justify-center">
              <button className="btn btn-active btn-error">Details</button>
              <input
                className="btn btn-active btn-warning"
                type="submit"
                value="Add Wishlist"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WishList;
