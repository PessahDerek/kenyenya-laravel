import React from 'react';
import { Card, Text } from '@mantine/core';

export const ValueCard = ({ label, value }: ValueObj) => {
    return (
        <Card color={'primary.9'} className={`grid gap-2 mt-auto h-max py-10 bg-primary`}>
            <span className={'text-3xl text-secondary-700 font-bold'}>{label}</span>
            <Text>{value}</Text>
        </Card >
    );
};
