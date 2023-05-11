import styles from '@/styles/Home.module.css';
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";


export default function Home() {
	return (
		<>
			<Head>
				<title>Bold Burgers | Home</title>
				<meta name="title" content="Bold burgers"/>
			</Head>
			<div className={styles.container}>
				<h2>Home page</h2>
				<Link href="/burgers">all burgers</Link>

				<div style={{width: '500px', height:'200px', border: '1px solid green', display: 'relative'}} className={styles.box}>
					<Image width={100} height={200} src="/laptop2.jpg"  />
					{/*<Image layout="fill" src="/laptop2.jpg"  style={{display: "relative"}}/>*/}
				</div>
			</div>
		</>
	);
}
