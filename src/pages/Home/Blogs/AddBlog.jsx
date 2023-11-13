// import img1 from '../../../assets/a11_5.jpg'
import Swal from "sweetalert2";
const AddBlog = () => {
  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const shortDes = form.shortDes.value;
    const longDes = form.longDes.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const newBlog = {
      name,
      title,
      shortDes,
      longDes,
      category,
      photo,
    };
    console.log(newBlog);

    // send data to the server
    fetch("https://assignment11-serverside-categorynumber6.vercel.app/blogByUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Blog Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/XCrbJWN/a11-5.jpg})" }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-none ">
            <div className=" ">
              <h2 className="text-3xl font-bold text-black">
                Adding your Blog{" "}
              </h2>
              <form onSubmit={handleAddBlog}>
                {/* form name and title row */}
                <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text text-xl text-yellow-200">
                        Blog Name
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Blog Name"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2 ml-4 ">
                    <label className="label">
                      <span className="label-text text-xl text-yellow-200">
                        Title
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="title"
                        placeholder="Title Here"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                {/* form shortDes row */}
                <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text text-xl text-yellow-200">
                        Short Description
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="shortDes"
                        placeholder="Short Description"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2 ml-4 ">
                    <label className="label">
                      <span className="label-text text-xl text-yellow-200">
                        Long Description
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="longDes"
                        placeholder="Long Description"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                {/* form category */}
                <div className=" mb-8">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-xl text-yellow-200">
                        Category
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                {/* form Photo Url row */}
                <div className="mb-8">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-xl text-yellow-200">
                        Photo Url
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="photo"
                        placeholder="Photo Url"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Add Blog"
                  className="btn btn-block bg-gray-400"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
