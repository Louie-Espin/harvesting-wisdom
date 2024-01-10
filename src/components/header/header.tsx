import Image from "next/image";
import Link from "next/link";
import logo from '@public/harvesting-wisdom.png';
import { clsx } from 'clsx';

import Navigation from "@/components/header/navigation";
import MobileNavigation from "@/components/header/mobile-navigation";

const menu = [
    {title: 'episodes', path: '/episodes'},
    {title: 'partners', path: '/partners'},
    {title: 'credits', path: '/credits'},
]

export default async function Header() {
    return (
        <div className="bg-[#6a973f] bg-background">
            <header className={clsx('mx-auto w-full max-w-6xl px-4 min-[1320px]:px-0',
                'flex flex-row items-center justify-between'
            )}>
                <Link href='/' className="block h-full w-1/2 lg:w-auto">
                    <Image src={logo} width={300} alt='Harvesting Wisdom Logo'/>
                </Link>
                <Navigation menu={menu} className="grow hidden lg:block"/>
                <MobileNavigation menu={menu} className="block lg:hidden" />
            </header>
        </div>
    )
}