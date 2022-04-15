import { Box, Button, Container, Group, TextInput } from "@mantine/core";
import BackNav from "../Common/BackNav";

export default function Create() {
    return (
        <Container my="sm">
            <BackNav title="Add new link" />
            <Box sx={{ maxWidth: 300 }} mx="auto" my="sm">
                <form>
                    <TextInput
                        required
                        label="title"
                        placeholder="My Example"
                    />
                    <TextInput
                        required
                        label="url"
                        placeholder="example.com"
                        type="url"
                    />
                    <Button color="teal" fullWidth mt="md">
                        Create
                    </Button>
                </form>
            </Box>
        </Container>
    )
}