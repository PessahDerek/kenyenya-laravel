import SectionTitle from '@/components/app/ui/SectionTitle';
import { aboutUs } from '@/lib/datas';
import { Badge, Button, Image } from '@mantine/core';
import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function HomeAboutUs() {
    return (
        <div className={'m-auto grid w-[95%] py-10 auto-rows-max place-items-center gap-4'}>
            <SectionTitle title={'About Us'} />
            <div className={'w-full md:columns-3'}>
                <Image className={'rounded-lg'} src={aboutUs.image} alt={'about us'} />
                <article className={'text-left'}>{aboutUs.article.split(' ').slice(0, 200).join(' ')}...</article>
            </div>
            <Link href={'/about'}>
                <Button rightSection={<ArrowRight />} className={'h-[50px]'} variant={'outline'}>
                    Read more
                </Button>
            </Link>
        </div>
    );
}
