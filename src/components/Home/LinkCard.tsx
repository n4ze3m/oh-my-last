import { Card, createStyles, Text } from "@mantine/core";

interface ILinkCardProps {
    title: string;
    uuid: string;
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
    }
}))

export default function LinkCard() {
    const { classes } = useStyles();
    return (
        <Card withBorder radius="md" p="sm" mb="sm" className={classes.card} >
            <Text transform="uppercase" color="dimmed" weight={700} size="xs">
                Title
            </Text>
        </Card>
    )
}