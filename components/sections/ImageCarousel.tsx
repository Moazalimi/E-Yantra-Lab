import React from "react";

const images: string[] = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
];

const ImageCarousel: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden">
            <div className="flex flex-row gap-5 animate-looping min-w-[calc(136px*16+20px*15)]">
                {images.map((src, index) => (
                    <img
                        key={`img-${index}`}
                        className="w-[136px] h-[194px] object-cover rounded-lg flex-shrink-0"
                        src={src}
                        alt={`Image ${index + 1}`}
                    />
                ))}
                {images.map((src, index) => (
                    <img
                        key={`img-dup-${index}`}
                        className="w-[136px] h-[194px] object-cover rounded-lg flex-shrink-0"
                        src={src}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
