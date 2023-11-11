import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

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
    <div>
      <h2>all wishlist: {allWishlist.length}</h2>
    </div>
  );
};

export default AllWishlist;
