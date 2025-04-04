import { Card, Image, Title } from '@mantine/core';

export default function GovernanceCard({ name, title, image }: ManageObj) {
    return (
        <Card className={'hover:bg-primary cursor-pointer transition-all'}>
            <Card.Section className={'h-[30vh]'}>
                <Image
                    className={`loading`}
                    src={image}
                    // src={'/temp/test.jpg'}
                    alt={name}
                    fallbackSrc={'/ui/avatar.png'}
                    loading="lazy"
                    onLoad={(e) => {
                        e.currentTarget.className = 'loaded';
                    }}
                />
            </Card.Section>
            <Card.Section className={'p-4 text-left'}>
                <Title order={3}>{name}</Title>
                <span className={'text-black/80'}>{title}</span>
            </Card.Section>
        </Card>
    );
}
