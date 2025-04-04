/// <reference types="vite/client" />

declare interface ValueObj {
    // [key: string]: string;
    value: string;
    label: string;
}

declare interface IntakeObj {
    open: Date;
    closes?: Date;
    isNext?: boolean;
    isOpen?: boolean;
}

declare interface CourseObj {
    title: string;
    description: string;
    image: string;
}

declare interface NewsAnnouncementObj {
    id: number;
    title: string;
    article: string;
    image: string;
    createdAt: string; // date string
}

declare interface ManageObj {
    id: number;
    name: string;
    title: string;
    category: ('admin' | 'board' | 'management')[];
    image?: string;
}
