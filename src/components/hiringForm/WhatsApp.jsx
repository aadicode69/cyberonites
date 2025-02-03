import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg text-center">
        <FaWhatsapp className="w-20 h-20 mx-auto text-green-600 sm:w-24 sm:h-24" />
        <h2 className="text-lg font-semibold mt-4 sm:text-xl">
          Cyberonites Club Hiring 2k25
        </h2>
        <p className="text-gray-600 text-sm mt-2 sm:text-base">
          Thank you for filling out the hiring form to join our club. To stay
          updated and interact with other participants until the interview
          dates arrive, click the link below to join our official WhatsApp
          group.
        </p>
        <a
          href="https://chat.whatsapp.com/GKhjnO2IYjHCx4Q1NnVcQ7"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 transition-all sm:text-lg"
        >
          Join Group
        </a>
      </div>
    </div>
  );
}