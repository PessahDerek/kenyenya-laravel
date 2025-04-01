import { Title } from '@mantine/core';
import React from 'react';
import { useInViewport } from '@mantine/hooks';

interface props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    title: string;
}

export default function SectionTitle({ title, ...rest }: props) {
    const {ref, inViewport} = useInViewport()
    return (
        <div {...rest} className={`text-secondary-800 m-auto grid w-max auto-rows-max ${rest.className}`}>
            <Title order={3} size={'3vmax'}>
                {title}
            </Title>
            <div ref={ref} className={`${inViewport ? "w-1/2 bg-secondary" : 'w-0 bg-accent'} transition-all duration-1000 m-auto h-[2px]`} />
        </div>
    );
}
