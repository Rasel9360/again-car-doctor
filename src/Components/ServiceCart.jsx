import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure className="p-4"><img src={img} alt="service" className="h-[208px] w-full rounded-xl" /></figure>
            <div className="px-4 pb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="card-actions justify-between items-center mt-2">
                    <p className="text-lg font-bold text-orange-600">Price : ${price}</p>
                    <Link to={`/check/${_id}`}><button className=" text-xl text-orange-600"><FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;