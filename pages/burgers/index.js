import Image from "next/image";
import Link from "next/link";

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
					<Link key={idx} href={}>
						<div className="card" >
							<h3>{burger.name}</h3>
							<div className="image">
								<Image width={100} height={200} src={burger.image} alt={'burgers'}/>
							</div>
						</div>
					</Link>
				))
			}
		</div>
	);
};

export default Burgers;
