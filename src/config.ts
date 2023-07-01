import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Master Inventory',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Mario Tarosso',
    twitter: '@mariojgt',
    url: 'https://www.unrealengine.com/marketplace/en-US/product/master-inventory',
    email: 'mjgtstudio@gmail.com',
    summary: 'Outrageous actualiser.'
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.'
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-10.512686445803297, -138.6706467796286] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/get-started' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/MJGT-Studio/MasterInventoryDocs`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Get Started': [
    { text: 'Get Started', link: 'doc/get-started' },
    { text: 'Controlls', link: 'doc/controlls' },
    { text: 'Craft System', link: 'doc/craft-system' },
    { text: 'Item Creation', link: 'doc/item-creation' },
    { text: 'Quest System', link: 'doc/quest-system' },
    { text: 'Tutorial System', link: 'doc/tutorial-system' },
    { text: 'Attribute System', link: 'doc/attribute-system' },
    { text: 'Talent System', link: 'doc/talent-system' },
  ],
  'Master UI': [{ text: 'master-ui', link: 'doc/master-ui' }]
}
