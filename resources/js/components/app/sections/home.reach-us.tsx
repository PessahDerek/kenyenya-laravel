import ContactForm from '@/components/app/forms/ContactForm';
import SectionTitle from '@/components/app/ui/SectionTitle';

export default function HomeReachUs() {
    return (
        <div className={'m-auto w-[95%] grid gap-10 pb-10'}>
            <SectionTitle title={'Reach us'} />
            <div className={"w-full flex flex-wrap gap-4"}>
                <ContactForm className={"!w-2/3"} />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.21348086668!2d34.773118!3d-0.9205519999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b5bf5e166622f%3A0x597a934b9448ef60!2sKenyenya%20Teachers%20Training%20College!5e0!3m2!1sen!2ske!4v1743520614278!5m2!1sen!2ske"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={"flex-1 min-w-[300px] min-h-[400px] rounded-lg"}
                ></iframe>
            </div>
        </div>
    );
}
