'use client';

import { useState, ReactNode, createContext } from "react";
import { Textarea } from "@/components/ui/textarea";
import { EpisodeCategories, EpisodeTags, EpisodeSeries } from "@/components/episodes/episode";
import FilterList from "@/components/episodes/filter-list";
import FilterMenu from "@/components/episodes/filter-menu";
import { Search } from 'lucide-react';

export const FilterContext = createContext({
    category: "",
    tags: new Set<EpisodeTags>(),
    series: "",
});

export default function EpisodesFilter({children}: { children?: ReactNode }) {

    const [category, setCategory] = useState<EpisodeCategories | "">("");
    const [tags, setTags] = useState<Set<EpisodeTags>>(new Set);
    const [series, setSeries] = useState<EpisodeSeries | "">("");

    const selectCategory = (value: EpisodeCategories) => setCategory(value);
    const clearCategory = () => setCategory("");
    const addTag = (value: EpisodeTags) => setTags((prevState: Set<EpisodeTags>) => new Set(prevState).add(value));
    const removeTag = (value: EpisodeTags) => setTags((prevState: Set<EpisodeTags>) => {
        const updatedSet: Set<EpisodeTags> = new Set(prevState);
        updatedSet.delete(value);
        return updatedSet;
    });
    const selectSeries = (value: EpisodeSeries) => setSeries(value);
    const clearSeries = () => setSeries("");

    return (
        <FilterContext.Provider value={{category: category, tags: tags, series: series}}>
            <div className="flex flex-row flex-wrap gap-2 justify-start items-stretch content-start lg:flex-row mb-4">
                <div className='relative grow'>
                    <Textarea rows={1} autoComplete='off' placeholder='Search Episodes List'
                              className='resize-none text-md text-white placeholder:text-white'/>
                    <Search className='absolute top-2 right-2'/>
                </div>
                <FilterMenu selectCategory={selectCategory} addTag={addTag} removeTag={removeTag}
                            selectSeries={selectSeries}/>
                <FilterList categoryClear={clearCategory} tagRemove={removeTag} seriesClear={clearSeries}/>
            </div>
            <div className="flex flex-col items-stretch justify-between gap-4 mb-8">
                {children}
            </div>
        </FilterContext.Provider>
)
};