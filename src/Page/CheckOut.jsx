import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, price, title, img } = service;

    const handleBooing = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const email = form.email.value;

        const booking = {
            service_id: _id,
            name,
            date,
            price: amount,
            email,
            service: title,
            img
        };
        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Booking added successfully')
                }
            })
    }

    return (
        <div>
            <div className="card shrink-0 border bg-[#F3F3F3] p-20">
                <h2 className="text-center text-3xl font-serif">Title : {service.title}</h2>
                <form onSubmit={handleBooing} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <input type="text" name="name" placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered" required defaultValue={user?.email} />
                        </div>
                        <div className="form-control">
                            <input type="number" name="amount" defaultValue={price} placeholder="Due amount" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="w-full">
                        <textarea className="textarea textarea-bordered w-full mt-6" name="" id="" cols="30" rows="6" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#FF3811] hover:bg-[#FF3811] text-lg text-white" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;