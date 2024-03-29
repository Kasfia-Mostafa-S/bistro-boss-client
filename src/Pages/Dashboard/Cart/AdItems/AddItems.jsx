import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosPublic= useAxiosPublic()
  const axiosSecure=useAxiosSecure()

  const onSubmit = async(data) => {
    console.log(data);
    const imageFile = { image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menu', menuItem)
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.name} added Successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
        }
    }
    // console.log(res.data)

  };
  return (
    <div>
      <SectionTitle
        heading="add an Item"
        subHeading="What's new"
      ></SectionTitle>
      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full mb-6">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <input
              type="text"
              placeholder="recipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <div>
            <div className="flex justify-evenly gap-4">
              <div className="w-full">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full "
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="salad">salad</option>
                  <option value="pizza">pizza</option>
                  <option value="soup">soup</option>
                  <option value="dessert">dessert</option>
                  <option value="drinks">drinks</option>
                </select>
              </div>

              <div className="w-full">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    type="number"
                    placeholder="price"
                    {...register("price", { required: true })}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="mt-4">
              <span className="label-text">Recipe Details</span>
            </div>
            <div>
              <textarea
                type="text"
                placeholder="recipe details"
                className="input input-bordered input-lg w-full"
                {...register("recipe")}
              />
            </div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs mt-4"
            />
          </div>

          <button className="btn btn-active btn-neutral mt-4">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
