export interface LinkItem {
  href: string;
  text: string;
  icon: string;
  iconAlt: string;
}

export interface HomeModel {
  mainLinks: {
    deploy: {
      href: string;
      text: string;
      icon: string;
      iconAlt: string;
    };
    docs: {
      href: string;
      text: string;
    };
  };
  footerLinks: LinkItem[];
}

export const homeData: HomeModel = {
  mainLinks: {
    deploy: {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      text: "Deploy now",
      icon: "/vercel.svg",
      iconAlt: "Vercel logomark"
    },
    docs: {
      href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      text: "Read our docs"
    }
  },
  footerLinks: [
    {
      href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      text: "Learn",
      icon: "/file.svg",
      iconAlt: "File icon"
    },
    {
      href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      text: "Examples",
      icon: "/window.svg",
      iconAlt: "Window icon"
    },
    {
      href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      text: "Go to nextjs.org →",
      icon: "/globe.svg",
      iconAlt: "Globe icon"
    }
  ]
}; 