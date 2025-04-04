import { Dialog } from '@headlessui/react';
import { Title } from '@mantine/core';


export default function UploadTendersForm() {

    return (
        <Dialog open={true} onClose={()=>{}}>
            <Title>Upload tender</Title>
        </Dialog>
    )
}

