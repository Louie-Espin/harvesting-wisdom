// This is a client component !

import { FilterContext } from "@/components/episodes/episodes-filter";

import { Button } from "@/components/ui/button";
import { HTMLAttributes, useContext } from "react";
import { clsx } from "clsx";
import { X, LayoutGrid, Hash, ListVideo } from "lucide-react";

import { EpisodeTags } from "@/components/episodes/episode";


interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    label?: string
}
function Badge({ className, label, ...props }: BadgeProps) {
    return (
        <div className={clsx(
            'grow-0 shrink-0 inline-flex gap-2 items-center rounded-full bg-blue-400 pl-3 pr-2',
            'hover:bg-blue-300 cursor-pointer',
            className)} {...props}
        />
    )
}

type FilterListProps = { categoryClear: () => void, tagRemove: (value: EpisodeTags) => void, seriesClear: () => void };

export default function FilterList({ categoryClear, tagRemove, seriesClear }: FilterListProps) {

    const { category, tags, series } = useContext(FilterContext);

    if ((category == '') && (tags.size == 0) && (series == '')) return null;
    return (
        <div className='w-full h-full py-2 px-3 bg-[#79C37B] rounded-3xl'>
            <ul className='w-full flex flex-row flex-wrap gap-2'>
                { category && <Badge onClick={categoryClear}><LayoutGrid size={14}/>{category}<X size={14}/></Badge> }
                { [...tags].map((tag, i) =>
                    <Badge key={i} onClick={() => tagRemove(tag)}><Hash size={14}/>{tag}<X size={14}/></Badge>)
                }
                { series && <Badge onClick={seriesClear}><ListVideo size={14}/>{series}<X size={14}/></Badge> }
            </ul>
        </div>
    )
}