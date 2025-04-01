import { ExtraCurricularObj } from '@/lib/datas';

export default function ActivityCard({ activity, description, icon }: ExtraCurricularObj) {
    const Icon = icon;
    return (
        <div className={'grid h-max w-full gap-2 p-4 rounded-lg transition-all cursor-pointer hover:bg-primary'}>
            <span className={'flex w-max m-auto gap-2 text-secondary-600 text-2xl font-bold'}>
                <Icon className={"my-auto"} />
                {activity}
            </span>
            <p>{description}</p>
        </div>
    );
}
