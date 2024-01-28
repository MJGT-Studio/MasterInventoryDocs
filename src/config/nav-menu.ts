import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Features",
          href: "/#features",
          description: "Take a closer look at the project's features.",
        },
        {
          title: "Twitter (@miickasmt)",
          href: "https://twitter.com/miickasmt",
          description: "Follow me to get the latest updates and news.",
          external: true,
        },
        {
          title: "Source Code",
          href: "https://github.com/mickasmt/astro-nomy",
          description: "You want to star the repository ? Let's get started!",
          external: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Docs",
      items: [
        {
          title: "Blog",
          href: "/MasterInventoryDocs/blog",
          description: "Checkout our blog posts.",
        },
        {
          title: "Docs",
          href: "/MasterInventoryDocs/docs/documentation/master-inventory-index",
          description:
            "A Markdown/MDX documentation site built using Content Collections.",
        }
      ],
    },
  ],
  links: [
    {
      title: "FAQ",
      href: "/MasterInventoryDocs/faq",
    },
    {
      title: "About",
      href: "/MasterInventoryDocs/about",
    },
  ],
};
