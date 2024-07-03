import { FaBeer, FaHome, FaProjectDiagram } from "react-icons/fa";
import {
  FaAddressCard,
  FaPerson,
  FaPhone,
  FaReact,
  FaRProject,
  FaUserGroup,
} from "react-icons/fa6";
import { LuAppWindow } from "react-icons/lu";

export const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <FaUserGroup />,
  },
  { name: "Projects", link: "#projects", icon: <LuAppWindow /> },
  { name: "Testimonials", link: "#testimonials", icon: <FaAddressCard /> },
  { name: "Contact", link: "#contact", icon: <FaPhone /> },
];

export const gridItems = [
  {
    id: 1,
    title: "Prioritizing Client Partnerships with Transparent Communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Providing Seamless Communication Across All Time Zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by a Passion for Technology and Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Developing a Maternity Care Application",
    description: "MaternyCare",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Cat vs Dog Detector App with Flutter",
    des: "Flutter app that uses tenserflow with google teachable machine to classify images as cats or dogs.",
    img: "/p1.png",
    iconLists: ["/flutter.png", "/dart.png", "/tf.png", "/tm.png"],
    link: "https://github.com/Yasela-dissanayake/Cat_vs_Dog_Detector",
  },
  {
    id: 2,
    title: "Maternity Care Connection App",
    des: "Developing an app to provide seamless communication between mothers and public health midwives ",
    img: "/p2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/dock.svg",
      "/psql.png",
      "/node.png",
    ],
    link: "https://github.com/Xanvia/MaternyCare",
  },
  {
    id: 3,
    title: "Mind and Soul Works: Empowering Holistic Health",
    des: "Craft a comprehensive website for 'Mind and Soul Works' focusing on holistic health services.",
    img: "/p3.png",
    iconLists: ["/wp.png"],
    link: "https://mindandsoulworks.com/",
  },
  {
    id: 4,
    title: "Trigonometry Companion App with Flutter",
    des: "Build a Flutter-based static app designed to assist students in studying trigonometric equations.",
    img: "/p4.png",
    iconLists: ["/flutter.png", "/dart.png", "/firebase.png"],
    link: "https://github.com/Yasela-dissanayake/trigonometry-help",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Development of web-based applications using React.js, enhancing interactivity under assistant",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - Flutter",
    desc: "Designed and developed mobile apps for both iOS & Android platforms using Flutter",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Wordpress Developer",
    desc: "Developed and maintained user-friendly modern websites",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Yasela-dissanayake/",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/yasela-dissanayake/",
  },
  {
    id: 3,
    img: "/fb.png",
    url: "https://www.facebook.com/yasela.dissanayake",
  },
];
