import { Link } from '@inertiajs/react';
import { Button, Image, Title } from '@mantine/core';
import React from 'react';

interface props extends CourseObj {
    index: number;
}

export default function CourseCard({ title, index, description, image, ...rest }: props & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...rest} className={`min-w-[300px] ${index % 2 !== 0 ? 'md:mt-[7vmax]' : ''} flex-1 ${rest.className}`}>
            <div className={'grid w-full gap-0'}>
                <div className={`flex ${index % 2 != 0 ? 'flex-row-reverse' : ''} gap-5`}>
                    <div
                        className={`absolute bottom-0 h-[100%] min-h-[100px] w-full rounded-t-2xl md:h-[65%] ${index % 2 != 0 ? 'bg-white' : 'bg-primary'}`}
                    />
                    <Title className={'mt-auto pb-5'} order={3}>
                        {title}
                    </Title>
                    <Image className={'h-[15vmax] w-[15vmax] content-center rounded-2xl object-cover'} src={image} alt={`${title} illustration`} />
                </div>
                <div
                    className={`w-full rounded-b-2xl md:w-[calc(100%-7vmax)] ${index % 2 != 0 ? 'ml-auto bg-white' : 'bg-primary'} grid gap-4 p-4 text-left`}
                >
                    <article>{description}</article>
                    <Link href={'/register'}>
                        <Button color={'accent'}>Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
