"use client";
import { ReactNode, HTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

type NavigationProps = {
    menu: { title: string, path: string }[]
}

export default function Navigation({ menu, ...rest }: NavigationProps & HTMLAttributes<HTMLDivElement>) {

    const pathname = usePathname();

    return (
        <nav {...rest}>
            <ul className="flex flex-row justify-evenly">
                {menu.map(({title, path}) =>
                    <li key={title}>
                        <NavigationLink path={path} active={pathname == path}>
                            {title}
                        </NavigationLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

function NavigationLink({path, active, children}: { path: string, active: boolean, children?: ReactNode }) {
    return (
        <Link href={path} className={
            clsx('relative font-semibold tracking-wide text-3xl uppercase',
                'after:block after:absolute after:-bottom-1 after:w-full after:h-0.5 after:bg-accent-foreground after:scale-x-0',
                'transition-colors ease-in-out duration-200 delay-75 hover:text-accent-foreground',
                'after:transition-transform after:ease-in-out after:duration-200 hover:after:scale-x-100',
                {'text-accent-foreground': active }
            )
        }>
            {children}
        </Link>
    )
}