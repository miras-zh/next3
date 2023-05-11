import Head from "next/head";
import React, {useEffect, useState} from "react";

const ReviewComponent = ({reviews}) => {
    // const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // getData()
        //     .then((res) => {
        //         res.length = 10;
        //         setReviews(res);
        //     })
    }, [])

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        return await response.json();
    }

    return (
        <>
            <Head>
                <title>Burgers Comments</title>
                <meta name="title" content="burgers comment"/>
            </Head>
            <div>
                <h3>Comments clients</h3>
                {
                    reviews.map((item) => (
                        <div key={item.id} style={{
                            marginBottom: '20px',
                            border: '1px solid white',
                            padding: '5px',
                            cursor: 'pointer',
                            color: "whitesmoke"
                        }}>
                            <h3>{item.email}</h3>
                            <p>
                                {item.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export const getServerSideProps = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();

    return {
        props: {
            reviews: data.slice(0,10)
        }
    }
}

export default ReviewComponent;