"use client";

import { HTMLAttributes } from "react";
import Link from 'next/link';
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

type NavigationProps = { menu: { title: string, path: string }[] }

export default function MobileNavigation ({ menu, ...rest }: NavigationProps & HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...rest}>
            <Sheet>
                <SheetTrigger className='mr-2'>
                    <Menu size="2rem"/>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <ul className="flex flex-col gap-3 justify-evenly">
                            {menu.map(({title, path}) =>
                                <li key={title}>
                                    <Link key={title} href={path} className='font-serif font-semibold text-2xl uppercase'>
                                        {title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}