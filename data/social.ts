export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/ICLIPTER",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bibeksabat/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:bibeksabat5278@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+91 8144191165",
      icon: "phone"
    }
  ];