import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AllWishListRow from "./AllWishListRow";

const AllWishlist = () => {
  const { user } = useContext(AuthContext);
  const [allWishlist, setAllWishList] = useState([]);

  const url = `http://localhost:5000/wishlist?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllWishList(data));
  });
  return (
    <div className="pt-24">
      <h2>All wishlist: {allWishlist.length}</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Blog Photo</th>
        {/* <th>Category</th>
        <th>Description</th>
        <th>Remove</th> */}
      </tr>
    </thead>
    <tbody>
     {
      allWishlist.map(SingleList=> <AllWishListRow key={SingleList._id} SingleList={SingleList} ></AllWishListRow>  )
     }
     
    </tbody>
   
    
  </table>
</div>
    </div>
  );
};

export default AllWishlist;
