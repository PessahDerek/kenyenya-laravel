import AppLayout from '@/layouts/app-layout';
import UploadTendersForm from '@/components/app/forms/UploadTendersForm';


export default function AdminTenders() {

    return (
        <AppLayout breadcrumbs={[{title: "Tenders", href: "/admin/tenders"}]}>
            <>
                <UploadTendersForm />
            </>
        </AppLayout>
    )
}

