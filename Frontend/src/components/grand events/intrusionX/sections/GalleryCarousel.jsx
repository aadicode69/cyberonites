import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCamera } from 'react-icons/fa';
import PropTypes from 'prop-types';

const GalleryCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setIsAutoPlaying(false);
    };

    // Restart autoplay after 5 seconds of inactivity
    useEffect(() => {
        if (isAutoPlaying) return;

        const timer = setTimeout(() => {
            setIsAutoPlaying(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isAutoPlaying, currentIndex]);

    return (
        <div className="relative">
            <div className="h-[450px] overflow-hidden rounded-sm border-2 border-purple-500/70 bg-black/40 shadow-lg shadow-purple-900/30">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Event Gallery ${index + 1}`}
                            className="w-full h-full object-cover"
                        />

                        {/* Add a cyberpunk-styled caption overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <div className="flex items-center text-purple-300 font-mono text-sm">
                                <FaCamera className="mr-2 text-purple-400" />
                                <span>GALLERY IMAGE {currentIndex + 1}/{images.length}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation buttons with improved styling */}
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-900/70 text-white p-3 rounded-full transition-all z-20 border border-purple-500/50 hover:scale-110"
                    onClick={goToPrevious}
                >
                    <FaChevronLeft />
                </button>

                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-900/70 text-white p-3 rounded-full transition-all z-20 border border-purple-500/50 hover:scale-110"
                    onClick={goToNext}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};
GalleryCarousel.propTypes = {
    images: PropTypes.array.isRequired
};

export default GalleryCarousel;
