import { paths } from '@/lib/datas';
import { Image, List } from '@mantine/core';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { MdFacebook, MdPhone } from 'react-icons/md';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className={'from-secondary-800 to-secondary-600 grid h-max w-full gap-10 bg-gradient-to-r pt-20 text-white'}>
            <div className={'m-auto grid w-[95%] grid-cols-3'}>
                <div className={'grid auto-rows-max gap-2'}>
                    <span className={'text-xl font-bold'}>Contacts</span>
                    <List className={'m-auto w-max text-left'}>
                        <List.Item icon={<MdPhone />}>
                            <a href={''}>+254 741 232 333</a>
                        </List.Item>
                        <List.Item icon={<MdPhone />}>
                            <a href={''}>+254 741 232 333</a>
                        </List.Item>
                        <List.Item icon={<FaXTwitter />}>
                            <a href={''}>@kenyenya</a>
                        </List.Item>
                        <List.Item icon={<MdFacebook />}>
                            <a href={''}>@kenyenya</a>
                        </List.Item>
                    </List>
                </div>
                <div className={'m-auto grid w-full gap-2 md:w-[200px]'}>
                    <Image src={'/ui/logo.png'} className={'m-auto h-[100px] w-[100px] rounded-md bg-white p-2'} />
                    <span>
                        <b>Kenyenya Teachers Training College</b>
                    </span>
                </div>
                <div className={'grid auto-rows-max gap-2'}>
                    <span className={'text-xl font-bold'}>Site map</span>
                    <List className={'m-auto w-max text-left'}>
                        {paths.map((path, i) => (
                            <List.Item key={i} icon={<BiRightArrowAlt />}>
                                <Link href={path.path} >
                                    {path.label}
                                </Link>
                            </List.Item>
                        ))}
                    </List>
                </div>
            </div>
            <span className={'bg-secondary-900 w-full p-1'}>&copy;{new Date().getFullYear()} Kenyenya Teachers Training College</span>
        </footer>
    );
}
