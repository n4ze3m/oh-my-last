import { Button, Card, createStyles, Group, Text, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface ILinkCardProps {
    track: any,
    onDelete: () => void
}


const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 100ms ease',
        cursor: 'pointer',

        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.02)',
        },

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
        },
    },
    icon: {
        height: '1.4rem',
        width: '1.4rem',
        color: theme.white
    }
}))

export default function LinkCard(props: ILinkCardProps) {
    const { classes } = useStyles();
    let navigate = useNavigate();

    return (
        <Card withBorder radius="md" p="sm" mb="sm" className={classes.card} >
            <Group position="apart">
                <Box styles={{ maxWidth: "300" }} onClick={() => navigate("/view/" + props.track.id)}>

                    <Text transform="uppercase" color="dimmed" weight={700} size="xs">
                        {
                            props.track.title
                        }
                    </Text>
                </Box>
                <Button size="sm" radius="sm" color="teal" onClick={() => props.onDelete()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={classes.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </Button>
            </Group>
        </Card>
    )
}