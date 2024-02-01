import { useContext } from "react";
import { FilterContext } from "@/components/episodes/episodes-filter";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuPortal,
    DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Hash, LayoutGrid, ListFilter, ListVideo } from "lucide-react";
import {
    EpisodeCategories,
    episodeCategories, EpisodeSeries,
    episodeSeries,
    EpisodeTags,
    episodeTags
} from "@/components/episodes/episode";

type FilterMenuProps = {
    selectCategory: (value: EpisodeCategories) => void,
    addTag: (value: EpisodeTags) => void,
    removeTag: (value: EpisodeTags) => void,
    selectSeries: (value: EpisodeSeries) => void
}

export default function FilterMenu({ selectCategory, addTag, removeTag, selectSeries }: FilterMenuProps) {

    const { tags } = useContext(FilterContext);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='rounded border border-neutral-50 flex gap-4 py-2 px-3'>
                <ListFilter/> Filter
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40'>
                <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <LayoutGrid className="mr-2 h-4 w-4"/>
                        <span>Category</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            {episodeCategories.map((value, index) =>
                                <DropdownMenuItem key={index} onClick={() => selectCategory(value)}>
                                    {value}
                                </DropdownMenuItem>
                            )}
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Hash className="mr-2 h-4 w-4"/>
                        <span>Tag</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            {episodeTags.map((value, index) =>
                                <DropdownMenuCheckboxItem key={index} checked={tags.has(value)}
                                                          onCheckedChange={(c) => c ? addTag(value) : removeTag(value)}
                                >
                                    {value}
                                </DropdownMenuCheckboxItem>
                            )}
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <ListVideo className="mr-2 h-4 w-4"/>
                        <span>Series</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            {episodeSeries.map((value, index) =>
                                <DropdownMenuItem key={index} onClick={() => selectSeries(value)}>
                                    {value}
                                </DropdownMenuItem>
                            )}
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}