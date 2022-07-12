import Link from '../src/components/Link';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link href="/sobre">
                        Ir para Sobre
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Home