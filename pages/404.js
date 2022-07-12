import Link from '../src/components/Link';

function Error404() {
    return (
        <div>
            <h1>Error - 404</h1>
            <ul>
                <li>
                    <Link href="/">
                        Ir para Home
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Error404