import { Card, createStyles, Group, Text } from "@mantine/core";
import * as moment from "moment"

interface IViewCardProps {
    link: any;
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

export default function ViewCard(props: IViewCardProps) {
    
    const { classes } = useStyles();

    const convertChromeTime = (time: number) => {
        // time is in milliseconds
        // convert decimal to integer
        let timeInt = Math.floor(time);
        const date = new Date(timeInt);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }
    return (
        <Card withBorder radius="md" p="sm" mb="sm" className={classes.card} onClick={async () => {
            // open link in current chrome tab
            await chrome.tabs.create({ url: props?.link?.url });
        }}  >
            <Text transform="uppercase"  weight={700} size="xs">
                {
                    props?.link?.title
                }
            </Text>
            <Text weight={500} my="md" size="sm" color="dimmed">
                {
                    convertChromeTime(props?.link?.lastVisitTime)
                }
            </Text>
        </Card>
    )
}