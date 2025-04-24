import React from 'react';

// Card variants with different styling options
const cardVariants = {
  default: {
    cardClass: "bg-gray-900 border border-gray-800",
    imageContainerClass: "border-b border-gray-800",
    contentClass: "bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent",
    titleClass: "text-white font-semibold"
  },
  primary: {
    cardClass: "bg-gray-900 border-2 border-blue-600",
    imageContainerClass: "border-b border-blue-600",
    contentClass: "bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent",
    titleClass: "text-blue-400 font-semibold"
  },
  secondary: {
    cardClass: "bg-gray-900 border-2 border-purple-600",
    imageContainerClass: "border-b border-purple-600",
    contentClass: "bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent",
    titleClass: "text-purple-400 font-semibold"
  },
  accent: {
    cardClass: "bg-gray-900 border-2 border-cyan-600",
    imageContainerClass: "border-b border-cyan-600",
    contentClass: "bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent",
    titleClass: "text-cyan-400 font-semibold"
  },
  highlight: {
    cardClass: "bg-gray-900 border-2 border-amber-600",
    imageContainerClass: "border-b border-amber-600",
    contentClass: "bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent", 
    titleClass: "text-amber-400 font-semibold"
  }
};

export default function IntrusionCards({
  list,
  variant = "default",
  cardPadding = "p-0",
  imageRatio = "aspect-[16/9]",
  contentPadding = "p-4",
  showCaption = true,
  captionBg = true,
  rounded = "rounded-lg",
  shadow = "shadow-lg"
}) {
  // Get variant styling or use default if specified variant doesn't exist
  const variantStyle = cardVariants[variant] || cardVariants.default;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {list.map((item) => (
        <div key={item.id} className={`bg-gray-800 ${rounded} ${shadow} overflow-hidden`}>
          <img
            src={item.imageUrl}
            alt={item.altText}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
