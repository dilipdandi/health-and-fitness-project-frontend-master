import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
axios.defaults.withCredentials = true;

export default function login() {
    const router = useRouter()
    const [formData,setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password:''
    });
    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/profileApi/getMyProfile`)
            .then((response) => {
                if (response.status === 200) {
                    setFormData({
                        name: response.data.name,
                        mobile: response.data.mobile,
                        email: response.data.email,
                    })
                }
                else {
                    router.push('/');
                }
            })
            .catch((err) => {
                router.push('/');
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
                .post(`http://localhost:3001/api/profileApi/updateMyProfile`, {
                    name: formData.name,
                    mobile: formData.mobile,
                    email: formData.email,
                    password: formData.password,
                })
                .then((response) => {
                    if (response.status === 200) {
                        alert("Profile updated...")
                        router.push('/');
                    } else alert("Please try again");
                })
                .catch((errors) => {
                    console.log(errors)
                    alert('Network error, Please try again');
                });
        }
    }

    const handleLogout = () => {
        axios
            .get(`http://localhost:3001/api/publicApi/logout`)
            .then((response) => {
                router.push('/');
            })
            .catch((err) => {
                router.push('/');
            });
    }

    return (
        <>
            <Header/>
            <section className="text-gray-600 body-font relative bg-[url('/profile.jpg')] object-center object-fill">
                <div className="container px-5 py-12 mx-auto justify-center">
                    {/*<div className="flex flex-col text-center w-full mb-12">*/}
                    {/*    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Update Profile</h1>*/}
                    {/*</div>*/}
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div
                            className="lg:w-4/6 md:w-1/2 text-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-stone-700 shadow-2xl">
                            <h2 className="text-teal-500 text-2xl font-bold italic underline decoration-wavy title-font mb-5 uppercase">
                                update profile</h2>
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
                                        UPDATE
                                    </button>
                                </div>

                                <div className="p-2 w-full">
                                    <button onClick={handleLogout}
                                            className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                        LOGOUT
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
