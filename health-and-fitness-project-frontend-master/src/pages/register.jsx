import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
axios.defaults.withCredentials = true;

export default function RegisterPage(){
    const router = useRouter()
    const [formData,setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password:''
    });
    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/checkToken`)
            .then((response) => {
                if (response.status === 200) {
                    router.push('/');
                }
            })
            .catch((err) => {
            });
    }, []);
    const handleTextChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = () => {
        if (!formData.name) alert("Please enter name");
        if (!formData.mobile) alert("Please enter Mobile Number");
        if (!formData.password) alert("Please enter Password");
        else {
            axios
                .post(`http://localhost:3001/api/publicApi/registerUser`, {
                    name: formData.name,
                    mobile: formData.mobile,
                    email: formData.email,
                    password: formData.password,
                })
                .then((response) => {
                    if (response.status === 201) {
                        alert("Thanks for Register Here...")
                        setFormData({
                            name: '',
                            mobile: '',
                            email: '',
                            password:''
                        });
                        router.push('/');
                    } else alert("Please try again");
                })
                .catch((errors) => {
                    console.log(errors)
                    alert('Network error, Please try again');
                });
        }
    }
    return(
        <>
            <Header/>
            <section className="text-gray-600 body-font bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <div className="container px-10 py-16 mx-auto flex flex-wrap items-center ">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
                        <img src="/register.png" alt="img" width="600" height="400" />
                    </div>
                    <div
                        className="lg:w-2/6 md:w-1/2 text-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-stone-700 shadow-2xl">
                        <h2 className="text-teal-500 text-2xl font-bold italic underline decoration-wavy title-font mb-5 uppercase">
                            Sign Up</h2>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-lg">Name</label>
                                    <input type="text" id="name" name="name" value={formData.name}
                                           onChange={handleTextChange}
                                           className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="mobile" className="leading-7 text-lg">Mobile</label>
                                    <input type="number" id="mobile" name="mobile" value={formData.mobile}
                                           onChange={handleTextChange}
                                           className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-lg">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email}
                                           onChange={handleTextChange}
                                           className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="password"
                                           className="leading-7 text-lg">Password</label>
                                    <input type="password" id="password" name="password" value={formData.password}
                                           onChange={handleTextChange}
                                           className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button onClick={handleSubmit}
                                        className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                    SUBMIT
                                </button>
                            </div>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
                                Already have an Account <a href="/login"
                                                           className="text-teal-500 hover:underline cursor-pointer font-bold"> Login</a> here
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}