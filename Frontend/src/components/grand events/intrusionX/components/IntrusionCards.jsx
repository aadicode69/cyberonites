// Card variants with different styling options
import PropTypes from 'prop-types';

export default function IntrusionCards({
  list,
  rounded = "rounded-lg",
  shadow = "shadow-lg"
}) {

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

IntrusionCards.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imageUrl: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired
    })
  ).isRequired,
  rounded: PropTypes.string,
  shadow: PropTypes.string
};

