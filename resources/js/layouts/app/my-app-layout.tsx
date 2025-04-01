import Footer from '@/components/app/navigation/Footer';
import Navbar from '@/components/app/navigation/Navbar';
import React, { PropsWithChildren } from 'react';

export default function MyAppLayout({ children }: PropsWithChildren & React.HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
