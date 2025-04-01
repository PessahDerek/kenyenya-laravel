import AppLayout from '@/layouts/app-layout';
import { TextInput } from '@mantine/core';

export default function () {
    return (
        <AppLayout breadcrumbs={[{ title: 'Articles', href: '/articles' }]}>
            <form>
                <TextInput label={"About"} name={'title'} placeholder={'Title'} />
            </form>
        </AppLayout>
    );
}
