import { paths } from '@/lib/datas';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@mantine/core';

export default function Navbar() {
    const { url } = usePage();
    const active = (path: string) => {
        const is = path === '/' ? url === path : url.split('/').join('/').includes(path.replace('/', ''));
        return is ? 'text-secondary font-bold' : '';
    };
    return (
        <nav className={'sticky top-0 z-40 grid h-[70px] w-full bg-white'}>
            <div className={'m-auto flex h-max w-full justify-between px-[2.5%]'}>
                <Link className={'text-secondary-700 text-xl font-bold'} href="/">
                    Kenyenya TVC
                </Link>
                <div className={'m-auto hidden justify-between gap-10 md:flex'}>
                    {paths.map((path, i) => (
                        <Link className={`transition-all ${active(path.path)}`} href={path.path} key={i}>
                            {path.label}
                        </Link>
                    ))}
                </div>
                <Link href={'/register'}>
                    <Button color={'accent'}>Register now</Button>
                </Link>
            </div>
        </nav>
    );
}
