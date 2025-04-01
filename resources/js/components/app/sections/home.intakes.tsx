import IntakeCard from '@/components/app/cards/IntakeCard';
import SectionTitle from '@/components/app/ui/SectionTitle';
import { intakes } from '@/lib/datas';
import { sortIntakes } from '@/lib/utils';
import { Image } from '@mantine/core';

export default function HomeIntakes() {
    return (
        <div className={'m-auto grid w-full auto-rows-max overflow-hidden bg-secondary-800 place-items-center gap-4'}>
            {/*<div className={"w-[100vw] h-[100vw] -ml-[0vw] -mt-[-100vh] bg-background rounded-[200vw]"} />*/}
            <Image src={"/ui/curve.svg"} alt={""} />
            <div className={"w-[90%] m-auto place-items-center py-10 grid gap-10"}>
                <SectionTitle className={'text-white'} title={'Our intakes'} />
                <div className={'grid w-full place-items-center gap-5 md:grid-cols-3'}>
                    {sortIntakes(intakes).map((i, x) => (
                        <IntakeCard intake={i} key={x} />
                    ))}
                </div>
            </div>
        </div>
    );
}
