import { SiBurgerking} from "react-icons";

const Header = () => {
	return (
		<header>
			<div>
				<SiBurgerking />
			</div>
			<nav>
				<a>Home</a>
				<a>About</a>
				<a>Comment</a>
				<a>Burgers</a>
			</nav>
		</header>
	);
};

export default Header;
