import { Button, Center, Container, createStyles, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import LinkCard from "./LinkCard";


const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 20,
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 40,
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
            lineHeight: 1.3,
        },
    },

    container: {
        marginTop: "1rem",
    },

}))

export default function Home() {
    const { classes } = useStyles();
     let navigate = useNavigate();
    return (
        <Container className={classes.container}>
            <Title className={classes.title}>Oh My Last</Title>
            <Center>
                <Button my="sm" color="teal"
                onClick={
                    () => navigate('/create')
                }
                >
                    Create new track
                </Button>
            </Center>
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
        </Container>
    )
}