import Image from 'next/image'
import style from './Nav.module.scss'
import { NavData } from '@/appData/Nav/Nav'

export default function Nav(): JSX.Element {
    return (
        <nav>
            <div className={style.logo}>
                <Image alt={'Webtronics logo'} priority {...NavData.logo} />
            </div>

            <ul className={style.menu}>
                {NavData.navList.map((item, key) => (
                    <li className={style['menu__item']} key={key}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
