import { useEffect } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className="space-y-3">
                <p className="text-lg text-orange-600 font-bold text-center">Services</p>
                <h3 className="text-4xl font-bold text-center">Our Service Area</h3>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    service.map(ser => <ServiceCart key={ser._id} service={ser}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;