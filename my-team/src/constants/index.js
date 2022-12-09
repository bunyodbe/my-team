import {
  logo,
  boy,
  settings,
  chart,
  quotes,
  c_user_1,
  c_user_2,
  c_user_3,
  facebook,
  pinteres,
  twitter,
} from "../assets";

export const navLinks = [
  { id: "home", title: "home" },
  { id: "about", title: "about" },
];

export const features = [
  {
    id: "feature-1",
    icon: boy,
    title: "Experienced Individuals",
    content:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    id: "feature-2",
    icon: settings,
    title: "Easy to Implement",
    content:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    id: "feature-3",
    icon: chart,
    title: "Enhanced Productivity",
    content:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    name: "Kady Baker",
    title: "Product Manager at Bookmark",
    img: c_user_1,
  },
  {
    id: "feedback-2",
    content:
      " “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    name: "Aiysha Reese",
    title: "Founder of Manage",
    img: c_user_2,
  },
  {
    id: "feedback-3",
    content:
      " “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    name: "Arthur Clarke",
    title: "Co-founder of MyPhysio",
    img: c_user_3,
  },
];

export const socials = [
  { id: "facebook", icon: facebook },
  { id: "pinteres", icon: pinteres },
  { id: "twitter", icon: twitter },
];
