import { Link } from '@inertiajs/react';
import { Badge, Button } from '@mantine/core';
import dayjs from 'dayjs';

interface props {
    intake: IntakeObj;
}

// todo: correct the dates
export default function IntakeCard({ intake: { open, closes, isOpen, isNext } }: props) {
    return (
        <div className={`mt-auto grid h-max w-full py-10 gap-4 rounded-lg p-5 ${isOpen ? "bg-white" : "bg-white/10 text-white"} text-secondary-800`}>
            {(isNext || isOpen) && (
                <Badge variant={'filled'} color={'green'} className={'m-auto p-4 px-5'}>
                    {isOpen ? 'Open' : 'Next'}
                </Badge>
            )}
            <span className={'grid gap-2'}>
                <span className={'text-xl font-bold'}>{dayjs(open).format('MMMM')} intake</span>
                <span>
                    {dayjs(open).format('dddd MMM DD')} {closes ? dayjs(closes).format('- dddd MMM DD') : ''}
                </span>
            </span>
            {isOpen &&
                <span>Closes in {dayjs().diff(closes, "day")} days</span>
            }
            {isNext &&
                <span>Opens in {dayjs().diff(open, "days")} days</span>
            }
            {isOpen && (
                <Link href={'/'}>
                    <Button>Register</Button>
                </Link>
            )}
        </div>
    );
}
