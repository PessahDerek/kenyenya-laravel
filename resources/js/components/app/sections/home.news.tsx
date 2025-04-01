import NewsCard from '@/components/app/cards/NewsCard';
import SectionTitle from '@/components/app/ui/SectionTitle';
import { newsAndAnnouncements } from '@/lib/datas';
import { Carousel } from '@mantine/carousel';
import { useViewportSize } from '@mantine/hooks';

export default function HomeNews() {
    const { width } = useViewportSize();

    return (
        <div className={'grid h-full w-full gap-10 py-10'}>
            <SectionTitle title={'News & announcements'} />
            <Carousel
                className={'m-auto w-[95%] overflow-hidden'}
                align={'start'}
                slideGap={'lg'}
                slideSize={{ base: '80%', sm: '80%', md: '33.33%' }}
                slidesToScroll={width < 500 ? 1 : 3}
                withControls
                withIndicators
                classNames={{
                    viewport: ' pb-10',
                    indicators: 'bottom-0 ',
                    indicator: 'w-[15px] h-[15px] bg-secondary',
                }}
            >
                {newsAndAnnouncements.map((item) => (
                    <Carousel.Slide key={item.id}>
                        <NewsCard {...item} />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    );
}
