import { clsx } from "clsx";
import Image from "next/image";

import mikeImg from '@public/temp/mike.jpg';
import joeImg from '@public/temp/joe.jpeg';
import kenanImg from '@public/temp/kenan.jpg';
import rodolfoImg from '@public/temp/rodolfo.png';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const credits = [
    {
        name: 'Michael McMahon',
        image: mikeImg,
        bio: 'Meet Michael, the visionary behind Harvesting Wisdom! With a bachelor’s degree in Environmental Design from SUNY Buffalo and a master’s degree in Urban Planning from ASU, he\'s the force behind Agave Environmental Contracting, Inc., specializing in native plant salvage, revegetation, and landscape expertise for over 30 years.\n' +
            '\n' +
            'In 2015, Michael planted the seeds of community at Agave Farms, a thriving Central Phoenix garden. In 2018, he founded Urban Farming Education, a non-profit dedicated to empowering communities through sustainable agriculture. In 2020, he established Soil Seed & Water, a soil amendment company rooted in vermicomposting.\n'
    },
    {
        name: 'Dr. Joseph Roselle',
        image: joeImg,
        bio: 'Dr. Roselle has been an active educator for over 20 years. His philosophy is to solve community based problems with community based solutions. Dr. Roselle consistently applies his experience, the knowledge acquired from his three advanced degrees in education to bring people together. Dr. Roselle currently serves as the Chair Person for the City of Phoenix’s Youth and Education Commission, the President of the Laveen Lions, the Executive Director of PBISAz, the Facilitator of the Laveen Community Action Committee, a founding member of the South Mountain Chamber of Commerce and a Chief Science Officers Coordinator.'
    },
    {
        name: 'Kenan Jakupovic',
        image: kenanImg,
        bio: 'Meet Kenan Jakupovic, our Marketing and Communications Manager at Urban Farming Education (UFE). Currently pursuing a degree in Business & Analytics at ASU, Kenan\'s journey in the world of sustainable agriculture began with product research and development at Soil Seed & Water. His passion for cultivating change led him to Agave Environmental Contracting Inc, where he joined as a Marketing Associate. Transitioning from his role at Agave, Kenan now spearheads the marketing and communications efforts at UFE.'
    },
    {
        name: 'Rodolfo Alvarez',
        image: rodolfoImg,
        bio: 'As the Director of Innovation at Soil Seed and Water, LLC, Rodolfo Alvarez excels in bridging aerospace engineering expertise with sustainable agricultural practices. He oversees product development, manages key technological integrations, and steers marketing strategies. Rodolfo\'s multifaceted role includes handling logistics, customer engagement, and leading initiatives for sustainable product innovations. His efforts are central to SSW\'s emergence as a leader in the organic soil sector, consistently introducing products that align with market demands and sustainability principles.'
    },
];

export default function CreditsPage() {

    return (
        <main className={clsx('min-h-screen w-full max-w-6xl px-4 min-[1320px]:mx-auto', 'mb-6')}>
            <div className='flex gap-4 flex-col flex-wrap relative w-full'>
                {credits.map((p) => <PartnerCard key={p.name} {...p} />)}
            </div>
        </main>
    )
};

function PartnerCard({name, image, bio}: {name: string, image: StaticImport, bio: string}) {
    return (
        <div className={clsx('flex','bg-[#79C37B] w-full rounded-lg overflow-hidden flex-col md:flex-row md:h-80')}>
            <div className='relative w-full md:basis-1/3 overflow-hidden'>
                <Image src={image} alt={`Picture of ${name}`} className='aspect-square w-full md:h-full object-cover'/>
            </div>
            <div className='p-6 w-full md:basis-2/3'>
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