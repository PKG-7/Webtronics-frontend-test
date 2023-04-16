import content from '*.svg'
import logo from '@/images/logo/logo.svg'

export interface INavList {
    title: string
    href: string
}

export interface INav {
    logo: typeof content
    navList: INavList[]
}

export const NavData: INav = {
    logo: logo,
    navList: [
        {
            title: 'About',
            href: 'aboutUs',
        },
        {
            title: 'Programs',
            href: 'technologies',
        },
        {
            title: 'Steps',
            href: 'steps',
        },
        {
            title: 'Questions',
            href: 'faq',
        },
        {
            title: 'Get in touch',
            href: 'contact-us',
        },
    ],
}
