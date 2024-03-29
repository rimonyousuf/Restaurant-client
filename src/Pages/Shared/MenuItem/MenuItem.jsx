const MenuItem = ({item}) => {

    const {name,recipe,image,price} = item

    return (
        <div className="flex space-x-5">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div className="space-y-2">
                <h3 className="text-2xl uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;