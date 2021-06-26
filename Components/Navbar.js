import { useRouter } from 'next/router'
import Link from 'next/link'
// import AllUsers from '../pages/Components/AllUsers';
// import create from '../pages/Components/create';
const Navbar = () => {
    const router = useRouter();
    const isActive = (route) => {
        if (route == router.pathname) {
            return 'active'
        }
        else { }

    }
    return (
        <div>
            <nav>
                <div className="nav-wrapper #b388ff deep-purple accent-1">
                    <a href="#" className="brand-logo left">Logo</a>
                    <ul id="nav-mobile" className="right ">
                        <li className={isActive('/Components/AllUsers')} ><Link href="/Components/AllUsers"><a>All Users</a></Link></li>
                        <li className={isActive('/Components/create')} ><Link href="/Components/create"><a>New User</a></Link></li>
                        <li className={isActive("/")} ><Link href="/"><a>Login</a></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
