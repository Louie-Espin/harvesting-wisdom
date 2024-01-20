'use client';

import { useState, ReactNode } from "react";
import { createContext } from 'react';

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { EpisodeCategories } from "@/components/episodes/episode";

import { X } from 'lucide-react';

export const FilterContext = createContext({ category: "" });

export default function EpisodesFilter({children}: { children?: ReactNode }) {

    const [category, setCategory] = useState<EpisodeCategories | "">("");
    const handleSelect = (value: EpisodeCategories) => setCategory(value);
    const clearSelect = () => setCategory("");

    return (
        <FilterContext.Provider value={{category: category}}>
            <div className="flex flex-col items-stretch justify-between gap-4 mb-8">
                <div className='flex justify-end gap-2'>
                    <Select value={category} onValueChange={handleSelect}>
                        <SelectTrigger className='w-[300px]'>
                            <SelectValue placeholder='Filter By Category'/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Agricultural Innovators">Agricultural Innovators</SelectItem>
                            <SelectItem value="Academic Perspectives">Academic Perspectives</SelectItem>
                            <SelectItem value="Policy Shapers">Policy Shapers</SelectItem>
                            <SelectItem value="Education And Sustainability Allies">Education And Sustainability
                                Allies</SelectItem>
                            <SelectItem value="Agency Insights">Agency Insights</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={clearSelect} disabled={category === ''} variant='outline' size='icon'>
                        <X/>
                    </Button>
                </div>
                {children}
            </div>
        </FilterContext.Provider>
    )
};