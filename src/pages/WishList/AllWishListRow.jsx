import Swal from 'sweetalert2'
const AllWishListRow = ({ SingleList }) => {
  const { blogName, Description, category, blogPhoto, _id } = SingleList;
  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure You Want To Remove?");
    if (proceed) {
      fetch(`https://assignment11-serverside-categorynumber6.vercel.app/wishlist/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Wishlist Removed",
                showConfirmButton: false,
                timer: 1500
              });
          }
        });
    }
  };
  return (
    <div>
      {/* row 1 */}
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="avatar">
            <div className="w-32 mask mask-squircle">
              <img src={blogPhoto} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{blogName}</td>
        <td>{category}</td>
        <td>{Description}</td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Remove WishList
          </button>
        </th>
      </tr>
    </div>
  );
};

export default AllWishListRow;
