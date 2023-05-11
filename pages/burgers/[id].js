import React from 'react';
import styles from '@/styles/burgers.module.css';
import Image from "next/image";

export const getStaticPaths = async () =>{
    const res = await fetch('http://localhost:5000/items')
    const data = await res.json();
    const paths = data.map((item)=>{
        return {
            params: {id: item.id}
        }
    })

    console.log('paths>',paths)

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch(`http://localhost:5000/items/${id}`)
    const data = await res.json();

    return {
        props: {
            burger: data
        }
    }
}

const Details = ({burger}) => {

    console.log('burger::', burger)

    return (
        <div className={styles.singleBurger}>
            <h1>{burger.name}</h1>
            <div className={styles.imageContainer}>
                <Image width={100} height={100} src={burger.image} alt={`${burger.name}`} Layout="responsive" objectFit="cover"/>
            </div>
            <div>
                <p>
                    {burger.desc}
                </p>
            </div>
        </div>
    );
};

export default Details;