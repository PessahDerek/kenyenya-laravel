import Footer from '@/components/app/navigation/Footer';
import Navbar from '@/components/app/navigation/Navbar';
import React, { PropsWithChildren } from 'react';

export default function CustomAppLayout({ children }: PropsWithChildren & React.HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <>
            <Navbar />
            <div className={'min-h-[calc(100vh-70px)] w-full'}>{children}</div>
            <Footer />
        </>
    );
}
