import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {

    const { name, category, price, recipe, _id } = useLoaderData()
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} has been updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }
        }
        console.log(res.data);
    };

    return (
        <div>
            <SectionTitle heading="update an item" subHeading="Refresh Info"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipie Name*</span>
                            </div>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                defaultValue={name}
                                placeholder="Recipie Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="flex gap-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-primary w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Your bio</span>
                            </div>
                            <textarea defaultValue={recipe} {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </label>
                    </div>

                    <div className="form-control w-full my-4">
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                    </div>

                    <button className="btn btn-active">
                        Update Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;