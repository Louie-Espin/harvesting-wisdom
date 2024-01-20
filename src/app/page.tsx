import Image from 'next/image';
import { clsx } from "clsx";
import { Separator } from "@/components/ui/separator";


// FIXME: poor CSS, not semantic, should have cleaner padding. Refactor!
export default function Home() {
  return (
    <main className={clsx("flex min-h-screen flex-col items-center justify-between")}>
        <div className={clsx('p-4 pb-8 w-full max-w-6xl mx-4 min-[1320px]:mx-auto','bg-[#79C37B] rounded-lg')}>
            <div className='flex flex-col space-y-1.5 p-5'>
                <h1 className="font-serif text-2xl font-semibold">
                    Episode 1 - Harvesting Wisdom Intro
                </h1>
                <p className='text-gray-100'>
                    Aenean et velit velit. Sed efficitur interdum ante.
                </p>
            </div>
            <div className="px-4 grid gap-6 grid-cols-1 lg:grid-cols-3">
                <div className='flex flex-col gap-6'>
                <iframe width="100%" height="200" style={{borderRadius: "12px"}}
                            src="https://www.youtube-nocookie.com/embed/B-LAPu1vFro?si=9jpgWHjjQm3ppykl"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                    </iframe>
                    <div>
                        <h2 className='text-2xl mb-2'>Featuring</h2>
                        <ul className="flex flex-row gap-3">
                            <li className='block w-28 h-28 bg-[#ACD4FB] rounded-3xl'></li>
                            <li className='block w-28 h-28 bg-[#ACD4FB] rounded-3xl'></li>
                            <li className='block w-28 h-28 bg-[#ACD4FB] rounded-3xl'></li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col gap-6">
                    <iframe style={{borderRadius: "12px"}}
                            src="https://open.spotify.com/embed/episode/02aix9sqo6g2IDZkfZW9Zd?utm_source=generator&t=0"
                            width="100%" height="152" frameBorder="0" allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                    </iframe>
                    <div>
                        <h2 className='text-2xl mb-2'>Episode Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus tortor in dolor scelerisque
                            laoreet. Integer dignissim sapien aliquet urna elementum rutrum a quis sapien. Nullam posuere risus mi,
                            sed accumsan lectus ullamcorper a. Aenean et velit velit. Sed efficitur interdum ante, ut gravida ipsum
                            maximus id. Donec tempor felis in arcu sagittis, nec ornare justo consequat. In hac habitasse platea
                            dictumst. Quisque cursus pellentesque vehicula. Mauris nec velit purus. Donec rutrum, sem a tristique
                            lacinia, leo lorem. cursus pellentesque vehicula. Mauris nec velit purus. Donec rutrum, sem a tristique
                            lacinia, leo lorem. cursus pellentesque vehicula. <span className='underline'>Read more.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
