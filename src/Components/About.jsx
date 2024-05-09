import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div className="my-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 h-full rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-24 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className="w-1/2">
                    <p className="text-lg text-orange-600 font-bold pb-4">About Us</p>
                    <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white text-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;