import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";


const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        console.log('not found page')

        setTimeout(() => {
            redirectHandler();
        }, 5000)

    }, [])

    const redirectHandler = () => {
        router.push('/')
            .then((res) => {
            })
    }

    return (
        <div className='not-found'>
            <h2>Ups . . . </h2>
            <h2>Page not found</h2>
            <p>Redirect to <Link href="/">Home page</Link></p>
        </div>
    )
}

export default NotFoundPage;