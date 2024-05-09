import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] my-5 rounded-2xl">
            <div id="slide1" className="carousel-item  relative w-full">
                <img src={img1} className="w-full object-center" />
                <div className="absolute flex h-full pl-20  items-center bg-gradient-to-r from-[#151515] to-blue-[#15151500]">
                    <div className="text-white w-1/2 space-y-6">
                        <h1 className="text-6xl font-semibold font-serif">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn bg-[#FF3811] text-white">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item  relative w-full">
                <img src={img2} className="w-full object-center" />
                <div className="absolute flex h-full pl-20  items-center bg-gradient-to-r from-[#151515] to-blue-[#15151500]">
                    <div className="text-white w-1/2 space-y-6">
                        <h1 className="text-6xl font-semibold font-serif">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn bg-[#FF3811] text-white">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item  relative w-full">
                <img src={img3} className="w-full object-cover object-center" />
                <div className="absolute flex h-full pl-20  items-center bg-gradient-to-r from-[#151515] to-blue-[#15151500]">
                    <div className="text-white w-1/2 space-y-6">
                        <h1 className="text-6xl font-semibold font-serif">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn bg-[#FF3811] text-white">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item  relative w-full">
                <img src={img4} className="w-full object-cover object-center" />
                <div className="absolute flex h-full pl-20  items-center bg-gradient-to-r from-[#151515] to-blue-[#15151500]">
                    <div className="text-white w-1/2 space-y-6">
                        <h1 className="text-6xl font-semibold font-serif">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn bg-[#FF3811] text-white">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;