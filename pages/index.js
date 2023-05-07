import styles from '@/styles/Home.module.css';
import Link from "next/link";


export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<h2>Home page</h2>
				<Link href="/burgers">all burgers</Link>

				<div className="container">
					<img src="../public/" alt=""/>
				</div>
			</div>
		</>
	);
}
