import { Title } from '@mantine/core';
import React from 'react';
import { useInViewport } from '@mantine/hooks';

interface props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    title: string;
}

export default function SectionTitle({ title, ...rest }: props) {
    const { ref, inViewport } = useInViewport();
    // const dashColor = rest.className ? `bg-${rest.className.split(" ").find(f => f.includes("text-"))?.replace("text-", "")??"bg-secondary"}` : "bg-secondary"
    return (
        <div {...rest} className={`text-secondary-800 m-auto grid w-max auto-rows-max ${rest.className}`}>
            <Title order={3} size={'3vmax'}>
                {title}
            </Title>
            <div ref={ref} className={`${inViewport ? `bg-secondary w-1/2` : 'bg-accent w-0'} m-auto h-[2px] transition-all duration-1000`} />
        </div>
    );
}
