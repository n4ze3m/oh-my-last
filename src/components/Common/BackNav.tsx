import { Button, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface IProps {
    title: string
}

export default function BackNav(props: IProps) {
    let navigate = useNavigate();

    return (
        <Group  >
            <Button color="teal"
                onClick={() => navigate('/')}
            >
                {"<"}
            </Button>
            <Text size="lg">
                {props.title}
            </Text>
        </Group>
    )
}