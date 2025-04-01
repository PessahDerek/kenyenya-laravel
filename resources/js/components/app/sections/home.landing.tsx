import { Link } from '@inertiajs/react';
import { Button, Image, Text, Title } from '@mantine/core';

export default function HomeLanding() {
    return (
        <div className={'h-[calc(100vh-70px)] w-full'}>
            <Image className={'h-full w-full'} src={'/ui/landing.jpg'} alt="landing image" />
            <div className={'from-secondary-950 absolute top-0 flex h-full w-full bg-gradient-to-t to-transparent text-white'}>
                <div className={'mx-auto mt-auto mb-[5%] grid w-[95%] gap-10 text-center md:w-2/3'}>
                    <span>
                        <Image
                            src={'/ui/logo.png'}
                            alt="logo"
                            className={'m-auto h-[100px] w-[100px] rounded-lg bg-white object-cover object-bottom p-2'}
                        />
                        <Title className={'font-medium'}>Kenyenya Teachers Training College</Title>
                    </span>
                    <span>
                        <span className={'text-[5vmax] font-black'}>DISCOVER THE FUTURE</span>
                        <Text className={'m-auto md:w-[70%]'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                        </Text>
                    </span>
                    <Link href={'/register'}>
                        <Button className={'h-[40px] px-10'} color={'accent'}>
                            Register now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
