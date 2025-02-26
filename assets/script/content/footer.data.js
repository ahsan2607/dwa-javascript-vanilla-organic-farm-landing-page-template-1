import { phoneIcon, emailIcon, mapIcon } from "./graphic/icons.js";

export const dataFooter = {
  contact: {
    title: "Contacts",
    list: [
      {
        icon: phoneIcon,
        title: "Phone",
        content: "+1 987 654 321",
      },
      {
        icon: emailIcon,
        title: "Email",
        content: "info@greenharvestfarm.com",
      },
      {
        icon: mapIcon,
        title: "Address",
        content: "789 Greenway Road, Countryside, CA",
      },
    ],
  },
  link: {
    title: "Link",
    list: [
      { href: "./index.html", text: "Home" },
      { href: "./about.html", text: "About Us" },
      { href: "./product.html", text: "Products" },
      { href: "./contact.html", text: "Contacts" },
    ],
  },
  copyright: "All right reserved. Made with interest",
};
