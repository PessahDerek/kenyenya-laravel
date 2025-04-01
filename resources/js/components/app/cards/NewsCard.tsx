import { Link } from '@inertiajs/react';
import { Button, Image, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';

export default function NewsCard({ title, article, image, createdAt }: NewsAnnouncementObj) {
    return (
        <div className={'grid h-full w-full gap-0 bg-white rounded-lg'}>
            <div className={'h-[30vh] w-full'}>
                <Image className={'h-full w-full rounded-t-lg object-cover'} src={image} alt={`${title} illustration`} />
                <div className={'absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-white to-transparent'} />
            </div>
            <div className={"w-full grid auto-rows-max p-4 text-left gap-4"}>
                <div className={'space-y-2 text-left'}>
                    <Title order={3}>{title}</Title>
                    <i>{dayjs(createdAt).format("DDD MMM YYYY")}</i>
                    <Text lineClamp={4}>{article}</Text>
                </div>
                <Link className={"w-max"} href={`/read/${title}`}>
                    <Button variant={'outline'}>Read more</Button>
                </Link>
            </div>
        </div>
    );
}
