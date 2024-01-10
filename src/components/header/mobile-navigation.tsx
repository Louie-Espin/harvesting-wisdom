"use client";

import { HTMLAttributes } from "react";
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
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}