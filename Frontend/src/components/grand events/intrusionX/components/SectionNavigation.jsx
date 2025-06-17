/* eslint-disable react/prop-types */
import { FaTerminal, FaHandshake, FaUsers, FaUserTie, FaClipboardCheck, FaTrophy, FaCamera, FaShieldAlt } from 'react-icons/fa';
import { navigationSections } from '../data/eventData';

const SectionNavigation = ({ activeTab, onTabChange, isScrolled }) => {
  // Function to render the appropriate icon based on the icon name
  const getIcon = (iconName) => {
    const iconMap = {
      FaTerminal: <FaTerminal />,
      FaHandshake: <FaHandshake />,
      FaUsers: <FaUsers />,
      FaUserTie: <FaUserTie />,
      FaClipboardCheck: <FaClipboardCheck />,
      FaTrophy: <FaTrophy />,
      FaCamera: <FaCamera />,
      FaShieldAlt: <FaShieldAlt />
    };
    return iconMap[iconName] || null;
  };

  return (
    <div className={`${isScrolled ? 'sticky top-0 z-50 py-3 bg-black/80 backdrop-blur-md border-b border-cyan-900' : 'mb-12'} transition-colors`}>
      <div className="flex overflow-x-auto hide-scrollbar gap-2 justify-center">
        {navigationSections.map(section => (
          <button
            key={section.id}
            onClick={() => onTabChange(section.id)}
            className={`font-mono text-xs px-3 py-2 whitespace-nowrap rounded-sm border ${
              activeTab === section.id 
                ? 'bg-cyan-900/40 text-cyan-300 border-cyan-700' 
                : 'bg-transparent border-gray-800 text-gray-400 hover:text-cyan-400'
            }`}
          >
            <span className="mr-2">{getIcon(section.iconName)}</span>
            <span>{section.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionNavigation;
