import { Button, Textarea, TextInput, Title } from '@mantine/core';
import React from 'react';
import { BsSend } from 'react-icons/bs';


export default function ContactForm({...rest}: React.HtmlHTMLAttributes<HTMLFormElement>) {

    return (
        <form {...rest} className={`w-full h-max p-4 grid auto-rows-max gap-2 bg-primary-400 rounded-lg text-left ${rest.className}`}>
            <Title order={3}>Send us a message</Title>
            <TextInput
                name={"name"}
                label={"Name"}
                placeholder={"Your name/institution"}
            />
            <TextInput
                name={"email"}
                label={"Email"}
                placeholder={"Your email"}
            />
            <Textarea
                placeholder={"Message here"}
                label={"Message"}
                autosize
                minRows={4}
                maxRows={10}
            />
            <Button rightSection={<BsSend/>}>
                Send
            </Button>
        </form>
    )
}

