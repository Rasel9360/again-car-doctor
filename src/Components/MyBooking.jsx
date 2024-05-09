import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setBookings(data);
        //     })
        axios.get(url,{withCredentials: true})
        .then(res => {
            setBookings(res.data)
        })
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        const proceed = confirm('Are you sure to you want delete it ?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deletion Successful')
                    }
                    const remaining = bookings.filter(book => book._id !== id);
                    setBookings(remaining);
                })
        }
    }


    const handleConfirm = id => {
        console.log(id);
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0){
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = "confirm"
                    const newBooking = [updated,  ...remaining];
                    setBookings(newBooking);
                }
            })
    }


    return (
        <div>
            <h2 className="text-3xl text-center font-serif font-bold my-10">Car Details : {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-slate-200 text-lg font-bold">
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Image</th>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBooking;