import { Box, Button, Container, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import BackNav from "../Common/BackNav";
import {v4 as uuid4 } from "uuid"
import { createTrack } from "../../services/db";

export default function Create() {
    const form = useForm({
        initialValues: {
            title: '',
            url: ""
        }
    });
    let navigate = useNavigate();
    return (
        <Container my="sm">
            <BackNav title="Add new link" />
            <Box sx={{ maxWidth: 300 }} mx="auto" my="sm">
                <form onSubmit={form.onSubmit(async (values) => {
                    const data = {
                        id: uuid4(),
                        title: values.title,
                        url: values.url
                    }

                   await  createTrack(data)

                    navigate('/view/' + data.id)
                })}>
                    <TextInput
                        required
                        label="title"
                        placeholder="My Example"
                        {...form.getInputProps('title')}
                    />
                    <TextInput
                        required
                        label="url"
                        placeholder="http://example.com"
                        type="url"
                        {...form.getInputProps('url')}
                    />
                    <Button color="teal" fullWidth mt="md" type="submit">
                        Create
                    </Button>
                </form>
            </Box>
        </Container>
    )
}