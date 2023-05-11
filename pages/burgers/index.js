import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/burgers.module.css"

export const getStaticProps = async () =>{
	const res = await fetch(' http://localhost:5000/items');
	const data = await res.json();


	return {
		props: {
			items: data
		}
	}
}


const Burgers = ({items}) => {

	console.log('data:',items);


	return (
		<div>
			<h2>Burgers</h2>
			{
				items.map((burger,idx)=>(
					<Link key={idx} href={`/burgers/${burger.id}`}>
						<div className={styles.burgerCard} >
							<div className={styles.imageContainer}>
								<Image width={100} height={100} src={burger.image} alt={`${burger.name}`} Layout="responsive" objectFit="cover"/>
							</div>
							<div>
								<h3>{burger.name}</h3>
								<p>
									{burger.desc}
								</p>
							</div>
						</div>
					</Link>
				))
			}
		</div>
	);
};

export default Burgers;
