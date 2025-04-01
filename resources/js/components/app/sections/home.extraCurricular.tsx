import ActivityCard from '@/components/app/cards/ActivityCard';
import SectionTitle from '@/components/app/ui/SectionTitle';
import { extraCurricular } from '@/lib/datas';
import { Button, Image } from '@mantine/core';

export default function HomeExtraCurricular() {
    return (
        <div className={'m-auto grid w-[95%] gap-10 py-10 md:w-[80%]'}>
            <SectionTitle title={'Not just a school'} />
            <div className={'grid h-max min-h-[50vh] w-full gap-4 md:grid-cols-3'}>
                <div className={'m-auto grid h-full place-items-center gap-4'}>
                    {extraCurricular.slice(0, extraCurricular.length / 2).map((ac, i) => (
                        <ActivityCard {...ac} key={i} />
                    ))}
                </div>
                <Image
                    className={'m-auto h-2/3 min-h-[150px] w-3/4 rounded-2xl drop-shadow-2xl md:w-full'}
                    src={'/ui/curricular.jpg'}
                    alt={'Students in a drama festival'}
                />
                <div className={'m-auto grid h-full place-items-center gap-4'}>
                    {extraCurricular.slice(extraCurricular.length / 2).map((ac, i) => (
                        <ActivityCard {...ac} key={i} />
                    ))}
                </div>
            </div>
            <Button className={'m-auto w-max'}>Register now</Button>
        </div>
    );
}
