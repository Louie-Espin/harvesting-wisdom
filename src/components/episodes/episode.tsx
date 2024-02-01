'use client';

import { clsx } from "clsx";
import { format } from "date-fns";

import { useContext } from 'react';
import { FilterContext } from "@/components/episodes/episodes-filter";
import AudioPlaceholder from "@/components/episodes/audio-placeholder";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const episodeCategories = [
    'Agricultural Innovators', 'Academic Perspectives', 'Policy Shapers',
    'Education And Sustainability Allies', 'Agency Insights'
] as const;
export const episodeTags = [
    'Hemp', 'Farmer', 'K-12 Education', 'University Professor', 'Soil Scientists', 'State-Elected Official',
    'County-Elected Official', 'Agriculture Businesses', 'Africa Partners', 'EcoTourism', 'STEM Garden',
    'State Agency', 'Eco-Friendly Business'
] as const;
export const episodeSeries = [ 'Malawi', 'SRP' ] as const;

export type EpisodeCategories = typeof episodeCategories[number];
export type EpisodeTags = typeof episodeTags[number];
export type EpisodeSeries = typeof episodeSeries[number];

export type EpisodeProps = {
    number: number
    name: string
    category: EpisodeCategories
    release: Date
    description: string,
    thumb?: StaticImport, // FIXME: TEMPORARY
    feature?: StaticImport[], // FIXME: TEMPORARY
}

export default function Episode({ number, name, category, release, description, thumb, feature }: EpisodeProps) {

    const { category: filteredCategory } = useContext(FilterContext);

    if (filteredCategory && filteredCategory !== category) return null;

    return (
        <div className={clsx('p-4 pb-8 w-full', 'bg-[#79C37B] rounded-3xl')}>
            <div className='flex flex-col space-y-1.5 p-5'>
                <h1 className="font-serif text-3xl font-semibold">
                    {`Episode ${number} - ${category}: ${name}`}
                </h1>
                <div className='flex gap-2'>
                    <p className='text-gray-100'>{format(release, 'PP')}</p>
                    <p className='text-gray-100'>{`•`}</p>
                    <p className='text-gray-100'>{`Coming Soon!`}</p>
                </div>
            </div>
            <div className="px-4 grid gap-y-6 grid-cols-1 lg:gap-x-6 lg:grid-cols-3">
                <div className='flex flex-col gap-6'>
                    {thumb ?
                        <Image src={thumb} alt='Episode thumbnail'
                               className='w-full h-[200px] rounded-3xl overflow-hidden object-cover'
                        />
                        :
                        <iframe width="100%" height="200" style={{borderRadius: "12px"}}
                                src="https://www.youtube-nocookie.com/embed/B-LAPu1vFro?si=9jpgWHjjQm3ppykl"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    }
                    <div>
                        <h2 className='text-2xl mb-2'>Featuring</h2>
                        <div className="flex flex-row gap-3">
                            {feature?.map((feature, i) =>
                                <Image key={i} src={feature} alt={'feature'}
                                       className='w-28 h-28 rounded-3xl object-cover'
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col gap-6">
                    {/*<iframe style={{borderRadius: "12px"}}*/}
                    {/*        src="https://open.spotify.com/embed/episode/02aix9sqo6g2IDZkfZW9Zd?utm_source=generator&t=0"*/}
                    {/*        width="100%" height="152" frameBorder="0" allowFullScreen*/}
                    {/*        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"*/}
                    {/*        loading="lazy">*/}
                    {/*</iframe>*/}
                    <AudioPlaceholder title={`Episode ${number} - ${category}: ${name}`} date={release} />
                    <div>
                        <h2 className='text-2xl mb-2'>Episode Description</h2>
                        <p>
                            {description} <span className='underline'>Read more.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}