import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed bg-opacity-60 bg-slate-500 text-white pt-8 my-20'>
            <SectionTitle
                subHeading="Check it out"
                heading="featured item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March 29, 2024</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequuntur in explicabo illo praesentium et dolorem, ducimus esse repudiandae sunt autem deleniti quas incidunt! Nemo officiis alias quasi maiores est?</p>
                    <button className="btn btn-outline btn-success border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;