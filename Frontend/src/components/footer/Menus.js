import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const joinUs = (e) => {
  e.preventDefault();
  // alert("We are not accepting any hiring forms at the moment. Please check back soon for updates!");
  toast("We are not accepting hiring applications at the moment. Please check back later for updates.", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    style: {
      background: "#0A0A0A",
      color: "#00FFFF",
      border: "1px solid #00FFFF",
      fontFamily: "'Courier New', monospace",
      textAlign: "center",
    },
  });
};

export const Explore = [
  { name: "Home", link: "/" },
  { name: "Our Team", link: "#" }, // /our_team -link
  { name: "Contact", link: "/contactus" }, // /contactus -link
  // { name: "Join Us", link: "/recruitment" }, // /recruitment -link
  { name: "Join Us", link: "#" }, // /recruitment -link
];
export const Visit = [
  { name: "Cyberonites Club. GLA University, Mathura, India - 281406" },
  { name: "See on Maps", link: "https://www.google.com/maps/place/GLA+University/@27.6056887,77.5907496,17z/data=!3m1!4b1!4m6!3m5!1s0x39736ce47bffc039:0xfe5fc3da92c6341!8m2!3d27.6056887!4d77.5933245!16s%2Fm%2F0ryvc6s?entry=tts&g_ep=EgoyMDI0MDYxNS4wKgBIAVAD" },
  { name: "Security", link: "/security" },
  { name: "Privacy Policy", link: "https://www.freeprivacypolicy.com/live/af9fbbb5-1acc-481f-8d06-ac6b84b7a27c" },
];
export const Socials = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/cyberonites-glau/" },
  { name: "Instagram", link: "https://www.instagram.com/official_cyberonites/" },
  { name: "Youtube", link: "https://www.youtube.com/@cyberonitesclub/videos" },
  { name: "Support", link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@cyberonites.com" },
];