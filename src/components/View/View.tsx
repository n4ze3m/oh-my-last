import { Box, Container, Divider, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findOneTrack } from "../../services/db";
import BackNav from "../Common/BackNav";
import Loading from "../Common/Loading";
import ViewCard from "./ViewCard";

export default function View() {
    let params = useParams();
    let navigate = useNavigate();
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)


    const fetchData = async () => {
        const track = findOneTrack(params.id!)
        if (!track) {
            navigate('/')
            return
        }

        const links = await chrome.history.search({
            text: track.url
        })
        console.log(links)
        setData(links)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Container my="sm">
            <BackNav title="Details" />
            <Box my="sm" mb="sm">


                {
                    loading && <Loading />
                }

                {
                    !loading && data.map((item: any, index) => {
                        if (index === 0) {
                            return (
                                <div key={item.id}>
                                    <Text mb="sm">
                                        Last visit
                                    </Text>
                                    <ViewCard link={item} />

                                    <Divider mb="sm" />
                                    <Text mb="sm" my="sm">
                                        Old visits
                                    </Text>
                                </div>
                            )
                        } else {
                            return <ViewCard link={item} key={item.id} />
                        }
                    })
                }
            </Box>
        </Container>
    )
}