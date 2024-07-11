import Link from "next/link";
import axios from "axios";
import {useEffect, useState} from "react";
axios.defaults.withCredentials = true;
export default function Header(){
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/checkToken`)
            .then((response) => {
                if (response.status === 200) {
                    setIsLogin(true);
                }
            })
            .catch((err) => {
            });
    }, []);

    return(
        <>
            <header className="text-gray-600 body-font bg-white drop-shadow-xl">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    <Link href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/health-fitness.png" height="50" width="70" />
                        <span class="ml-3 text-xl font-bold">HEALTH AND FITNESS</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href="/" className="mx-3 text-lg font-bold hover:underline hover:text-green-700">Home</a>
                        <a href="/social" className="mx-3 text-lg font-bold hover:underline hover:text-green-700">Social</a>
                        {isLogin ? (
                            <>
                                {/*<a href="/goal"*/}
                                {/*   className="mx-3 text-lg font-bold hover:underline hover:text-green-700">Goal</a>*/}
                                <a href="/nutrition"
                                   className="mx-3 text-lg font-bold hover:underline hover:text-green-700">Nutrition</a>
                                <a href="/health-metrics"
                                   className="mx-3 text-lg font-bold hover:underline hover:text-green-700">Health
                                    Metrics</a>
                                <a href="/profile"
                                   className="mx-3 text-lg font-bold hover:underline hover:text-green-700">Profile</a>
                                <a href="/about"
                                   className="mx-3 text-lg font-bold hover:underline hover:text-green-700">About</a>
                            </>
                        ) : (
                            <>
                            <a href="/about" className="mx-3 text-lg font-bold hover:underline hover:text-green-700">About</a>
                            <a href="/login"
                               className="ml-3 mr-2 text-lg font-bold hover:underline hover:text-green-700">Login</a>
                            </>
                        )}
                    </nav>

                </div>
            </header>
        </>
    )
}