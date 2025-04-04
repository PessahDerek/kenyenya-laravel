import GovernanceList from '@/components/app/sections/governance.list';
import CustomAppLayout from '@/layouts/app/custom-app-layout';
import { governancePaths } from '@/lib/datas';
import { router, usePage } from '@inertiajs/react';
import { Tabs } from '@mantine/core';
import { useMemo } from 'react';

export default function Governance() {
    const { url } = usePage();

    const value = useMemo(() => {
        console.log('xx: ');
        return url.includes('#') ? url : governancePaths[1].path;
    }, [url]);

    return (
        <CustomAppLayout>
            <Tabs classNames={{ tab: 'h-[60px] data-active:bg-primary' }} defaultValue={value}>
                <Tabs.List justify={'center'} className={'justify-items-center'}>
                    {governancePaths.map((path, i) => (
                        <Tabs.Tab color={'primary.2'} onClick={() => router.visit(path.path)} value={path.path} key={i}>
                            {path.name}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                <Tabs.Panel value={value}>
                    <GovernanceList />
                </Tabs.Panel>
            </Tabs>
        </CustomAppLayout>
    );
}
