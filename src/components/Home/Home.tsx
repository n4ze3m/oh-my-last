import { Button, Center, Container, createStyles, Title, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findAllTrack, removeTrack } from "../../services/db";
import Loading from "../Common/Loading";
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
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const tacks = findAllTrack()
        setData(tacks)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Container className={classes.container}>
            <Title className={classes.title}>Oh My Last</Title>
            <Center mb="sm">
                <Button my="sm" color="teal"
                    onClick={
                        () => navigate('/create')
                    }
                >
                    Create new track
                </Button>
            </Center>
            {
                loading && <Loading />
            }
            {
                !loading && data.map((track: any) => {
                    return <LinkCard key={track.id} track={track} onDelete={() => {
                        removeTrack(track.id)
                        fetchData()
                    }} />
                })
            }
        </Container>
    )
}