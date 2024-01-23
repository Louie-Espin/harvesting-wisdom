import Image from "next/image";
import { clsx } from 'clsx';
import { format } from 'date-fns';

import { Podcast, PlusCircle, Undo, Redo, PlayCircle } from "lucide-react";
import icon from '@public/harvesting-wisdom-icon.png';

export default function AudioPlaceholder({ title, date }: { title: string, date: Date }) {
    return (
        <div className={clsx('rounded-3xl p-3', 'bg-[#ACD4FB] h-[152px]')}>
            <div className='h-full grid grid-cols-[min-content_auto] gap-x-3'>
                <div className={clsx(
                    'h-[96px] w-[96px] bg-white rounded-2xl row-[1/span_2] self-center justify-self-center',
                    'md:h-[120px] md:w-[120px] md:row-[1/span_3]',
                    'flex items-center'
                    )}>
                    <Image src={icon} alt={'harvesting wisdom icon'} className='w-full h-[80%] object-contain' />
                </div>
                <Podcast className='ml-auto'/>
                <div className='flex flex-col items-start gap-1 overflow-clip text-nowrap truncate'>
                    <span className='font-semibold text-sm'>{title}</span>
                    <span className='font-light text-sm'>{format(date, 'PP')}{` • Harvesting Wisdom`}</span>
                    <div className='flex gap-1 items-center cursor-not-allowed'>
                        <PlusCircle />
                        <span className='font-light text-xs'>{'Coming soon to Spotify'}</span>
                    </div>
                </div>
                <div className='col-[1/span_2] md:col-auto flex justify-items-start items-center gap-3 cursor-not-allowed'>
                    <Undo size={'16px'} className='text-gray-100' />
                    <div className='flex-grow h-1 bg-gray-100 rounded max-w-[70%]'/>
                    <Redo size={'16px'} className='text-gray-100' />
                    <button disabled className='cursor-not-allowed ml-auto'>
                        <PlayCircle size={'32px'} />
                    </button>
                </div>
            </div>
        </div>
    );
}