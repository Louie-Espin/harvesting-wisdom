import { clsx } from "clsx";
import Image from "next/image";

import agave from '@public/partners/agave.png';
import ssw from '@public/partners/soilseedwater.png';

import { StaticImport } from "next/dist/shared/lib/get-img-props";

const partners = [
    {
        name: 'Agave Environmental Contracting, Inc.',
        image: agave,
        bio: 'Transforming Landscapes, Cultivating Beauty! Agave Environmental Contracting, Inc. stands as a seasoned full-service landscape company with over 30 years of expertise in the heart of Phoenix. Offering a comprehensive range of services, from landscape maintenance and enhancements to tree care, construction, and plant salvage, we are dedicated to elevating outdoor spaces with skill and passion.'
    },
    {
        name: 'Soil Seed and Water',
        image: ssw,
        bio: 'Meet our valued partner, Soil Seed & Water. Dedicated to serving the thriving organic farm industry, their mission is to meet the growing demand for high-quality soils and seed products. Committed to excellence, Soil Seed & Water provides a reliable source for organic farmers and retail customers across the southwest United States, ensuring consistent quality at a large scale.'
    },
];

export default function PartnersPage() {

    return (
        <main className={clsx('w-full max-w-6xl px-4 min-[1320px]:mx-auto', 'mb-6')}>
            <div className='w-full flex justify-center mb-4'>
                <h1 className='font-serif font-semibold text-3xl'>
                    Our Partners
                </h1>
            </div>
            <div className='flex gap-4 flex-row flex-wrap relative w-full items-stretch justify-center'>
                {partners.map((p) => <PartnerCard key={p.name} {...p} />)}
            </div>
        </main>
    )
};

function PartnerCard({name, image, bio}: {name: string, image: StaticImport, bio: string}) {
    return (
        <div className={clsx('flex','bg-[#79C37B] w-full rounded-lg overflow-hidden flex-col md:w-[33%]')}>
            <div className='relative w-full md:basis-1/3 overflow-hidden'>
                <Image src={image} alt={`Picture of ${name}`} className='aspect-square w-full md:h-full object-contain'/>
            </div>
            <div className='p-6 w-full'>
                <h2 className='font-serif font-semibold text-2xl mb-3'>
                    {name}
                </h2>
                <p className='max-w-[60ch]'>
                    {bio}
                </p>
            </div>
        </div>
    );
}