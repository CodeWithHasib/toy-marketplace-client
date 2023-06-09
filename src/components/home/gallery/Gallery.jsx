import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import PhotoGallery from './PhotoGallery';

const Gallery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://zooming-wheels.vercel.app/api/today-deal')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (
        <div className='my-32'>
            <h1 className='text-4xl text-center'>Our Featured Gallery </h1>
            <div className="w-[60%] mx-auto text-center mt-4 mb-11">
                <p className='text-sm'>From sleek sports cars that hug the curves of imaginary tracks to powerful monster trucks that conquer any terrain, our gallery showcases an extensive selection of toy cars that will ignite the thrill of racing in young hearts. Choose from an array of iconic models, including classic muscle cars, rugged off-road vehicles, and futuristic super cars.</p>
            </div>
            <PhotoGallery />


        </div>
    );
};

export default Gallery;