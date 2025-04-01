import { ValueCard } from '@/components/app/cards/ValueCard';
import SectionTitle from '@/components/app/ui/SectionTitle';
import { values } from '@/lib/datas';
import { greaterMiddle } from '@/lib/utils';

export default function HomeValues() {
    return (
        <div className={"place-items-center w-[95%] m-auto grid gap-4 py-10"}>
            <SectionTitle title={'Our values'} />
            <div className={"w-full grid md:grid-cols-3 gap-4"}>
                {greaterMiddle(values, 'value').map((val, i) => (
                    <ValueCard label={val.label} value={val.value} key={i} />
                ))}
            </div>
        </div>
    );
}
