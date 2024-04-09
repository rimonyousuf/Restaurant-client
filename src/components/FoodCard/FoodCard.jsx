const FoodCard = ({item}) => {

    const {name,recipe,image,price} = item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="mb-3">{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-success bg-slate-100 border-0 border-b-4 mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;