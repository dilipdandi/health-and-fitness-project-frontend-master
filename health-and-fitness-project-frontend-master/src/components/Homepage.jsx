import axios from "axios";
import {useEffect, useState} from "react";

export default function Homepage(){
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
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap">
                    <div className="lg:w-full">
                        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-20 relative ">
                            <img alt="gallery"
                                 className="w-full object-cover h-full object-center block opacity-70 absolute inset-0"
                                 src="/healthfitness.jpg" width="820" height="340"/>
                            <div className="text-center relative z-10 w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 text-red-700 font-bold">HEALTH AND
                                    FITNESS </h1>
                                <p className="mb-8 text-lg font-medium text-white">Health and Fitness Software is a digital
                                    solution aimed
                                    at promoting and supporting individuals health and wellness journeys by providing
                                    tools,
                                    resources, and personalized insights to achieve their fitness goals, monitor
                                    progress, and
                                    improve overall well-being.</p>
                                {isLogin ? (
                                    <>
                                    </>
                                ) : (
                                    <div className="flex justify-center">
                                        <a href="/register"
                                           className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Register
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}