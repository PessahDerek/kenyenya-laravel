import React from 'react';


export default function PointCard({major, label, ...rest}: {major: string, label: string } & React.HtmlHTMLAttributes<HTMLDivElement>) {

    return (
        <div {...rest} className={`p-2 grid gap-2 auto-rows-max rounded-md bg-primary place-content-center ${rest.className}`}>
            <span className={"text-3xl font-bold text-primary-800"}>{major}</span>
            <span>{label}</span>
        </div>
    )
}


