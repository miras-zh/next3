import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Header />	
			<div className="container">
				<h2>test</h2>
			</div>
			{/* <Footer /> */}
		</>
	);
}
