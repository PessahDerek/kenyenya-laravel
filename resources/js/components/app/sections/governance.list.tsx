import GovernanceCard from '@/components/app/cards/GovernanceCard';
import { governanceData, governancePaths } from '@/lib/datas';
import { usePage } from '@inertiajs/react';
import { useMemo } from 'react';

export default function GovernanceList() {
    const { url } = usePage();
    const list = useMemo(() => {
        const useThis = url.includes("#") ? url : governancePaths[1].path
        return governanceData.filter((gov) => gov.category.find((f) => useThis.includes(f)));
    }, [url]);

    return (
        <div className={'m-auto grid w-[95%] gap-2 p-4 md:grid-cols-4 lg:grid-cols-5'}>
            {list.map((item) => (
                <GovernanceCard {...item} key={item.id} />
            ))}
        </div>
    );
}
