import PointCard from '@/components/app/cards/PointCard';
import SectionTitle from '@/components/app/ui/SectionTitle';
import CustomAppLayout from '@/layouts/app/custom-app-layout';
import { aboutUs } from '@/lib/datas';
import { Image, Space, Text } from '@mantine/core';

export default function About () {
    return (
        <CustomAppLayout>
            <div className={'m-auto w-[90%]'}>
                <SectionTitle className={'py-20'} title={'About Us'} />
                <div className={'grid h-max w-full grid-flow-col gap-2 rounded-md py-4'}>
                    <PointCard major={'10+'} label={'Graduations'} className={'bottom-0'} />
                    <PointCard major={'5000+'} label={'Students'} className={'-top-[50%] h-[150%]'} />
                    <PointCard major={'100'} label={'Teachers'} className={'bottom-0'} />
                </div>
                <Space h={40} />
                <Image className={"w-full rounded-md md:w-1/2 h-[20vmax] object-top m-auto"} src={aboutUs.image} alt={"about us illustration"} />
                <Space h={40} />
                <article className={'text-left'}>
                    <Text>{aboutUs.article}</Text>
                </article>
            </div>
            <Space h={40} />
            {/*<div className={'h-[100vh] w-full'}>*/}
            {/*    <Image className={'h-full w-full object-top'} src={'/temp/schoolGate.png'} alt={'School Gate'} />*/}
            {/*    <div className={'from-background absolute top-0 h-full w-full bg-gradient-to-b to-transparent'} />*/}
            {/*</div>*/}
        </CustomAppLayout>
    );
}
