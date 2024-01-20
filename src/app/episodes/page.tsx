import { clsx } from "clsx";
import Episode, {EpisodeProps} from "@/components/episodes/episode";
import EpisodesFilter from "@/components/episodes/episodes-filter";


const episodes: EpisodeProps[] = [
    {
        number: 1,
        name: 'Urban Farming Education',
        category: 'Education And Sustainability Allies',
        release: new Date('2024-02-01'),
        description: 'Urban Farming Education has projects in Arizona and Africa. Learn how we support communities in both locations with professional development and hands-on STEM learning.'
    },
    {
        number: 2,
        name: 'Soil, Seed and Water & Urban Farming Education',
        category: 'Agricultural Innovators',
        release: new Date('2024-02-08'),
        description: 'Innovation and engagement are two key ingredients for change. Learn how Soil, Seed and Water and Urban Farming Education are doing both to transform their prospective communities.'
    },
    {
        number: 3,
        name: 'Malawi-Lukuni Project',
        category: 'Education And Sustainability Allies',
        release: new Date('2024-02-29'),
        description: 'Urban Farming Education currently has projects in Africa. Learn about the challenges facing our team and their innovative solutions.'
    },
    {
        number: 4,
        name: 'Arizona Legislature',
        category: 'Policy Shapers',
        release: new Date('2024-03-21'),
        description: 'Urban Farming Education partners with businesses and community leaders including elected officials. Learn how Senator Miranda and Representative Crews are supporting Urban Farming Education and making an impact in their community.'
    },
    {
        number: 5,
        name: 'Zimbabwe-Run Wild African Safaris',
        category: 'Agricultural Innovators',
        release: new Date('2024-03-22'),
        description: 'Urban Farming Education partners with businesses and community leaders including elected officials.  Learn how Senator Miranda and Representative Crews are supporting Urban Farming Education and making an impact in their community.'
    },
    {
        number: 6,
        name: 'Sunland STEAM Academy',
        category: 'Academic Perspectives',
        release: new Date('2024-04-11'),
        description: 'Join us in this insightful episode of "Harvesting Wisdom" as we sit down with the principal and a 3rd-grade teacher from Sunland STEAM Academy. Dive into the heart of education as we explore the innovative approaches and transformative experiences shaping young minds.'
    },
    {
        number: 9,
        name: 'SRP',
        category: 'Agency Insights',
        release: new Date('2024-04-04'),
        description: 'The Harvesting Wisdom podcast episode featuring Tyler Francis, association council member for SRP and owner of Francis Roses, delves into the intricate challenges associated with operating a rose-growing business. Tyler shares insights into the rich history of rose cultivation, shedding light on the evolution of the industry over time.\n' +
            'The podcast not only explores the complexities of managing a rose-growing enterprise but also provides a historical perspective, allowing listeners to gain a deeper understanding of the journey of rose cultivation. Additionally, Tyler Francis delves into the history of SRP, offering valuable insights into the organization\'s background, objectives, and contributions to the world of rose preservation.'
    },
]

export default function EpisodesPage() {

    return (
        <main className={clsx('min-h-screen w-full max-w-6xl mx-4 min-[1320px]:mx-auto')}>
            <EpisodesFilter>
                {episodes.sort((a, b) => b.number - a.number).map((episode) =>
                    <Episode key={episode.name} {...episode} />
                )}
            </EpisodesFilter>
        </main>
)
};