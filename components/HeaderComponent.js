import Link from "next/link";
import {BsList} from "react-icons/bs";


const HeaderComponent = () => {
    return (
        <header style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height:'50px',
            justifyContent: 'space-between',
            margin: '0',
            background: '#2f2fbbf5',
            alignItems: 'center'
        }}>
            <div style={{width: '20%', marginLeft:'55px'}}>
                <BsList style={{fontSize: '30px'}}/>
            </div>
            <nav style={{display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-evenly'}}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/burgers'>Burgers</Link>
                <Link href='/review'>Comment</Link>
                <Link href='/revittew'>not found</Link>
            </nav>
        </header>)
}

export default HeaderComponent;