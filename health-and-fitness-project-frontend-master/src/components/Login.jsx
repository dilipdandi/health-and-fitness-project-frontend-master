import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
export default function Login(){
    const router = useRouter();
    const [formData,setFormData] = useState({
        mobile: '',
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
        if (!formData.mobile) alert("Please enter Mobile Number");
        if (!formData.password) alert("Please enter Password");
        else {
            axios
                .post(`http://localhost:3001/api/publicApi/login`, {
                    mobile: formData.mobile,
                    password: formData.password,
                })
                .then((response) => {
                    if (response.status === 200) {
                        alert("Login successful...")
                        setFormData({
                            mobile: '',
                            password:''
                        });
                        router.push('/');
                    } else alert("Please try again");
                })
                .catch((errors) => {
                    console.log(errors)
                    alert(errors.response.data.error);
                });
        }
    }
    return(
        <>
            <section className="text-gray-600 body-font bg-[url('/login.jpg')] object-cover object-center">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div
                        className="flex lg:w-1/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div
                            className="lg:w-full md:w-1/2 bg-gray-700 bg-opacity-30 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-teal-700 text-2xl font-bold italic underline decoration-wavy title-font mb-5 uppercase">Sign In</h2>
                            <div className="relative mb-4">
                                <label htmlFor="mobile" className="leading-7 text-lg text-gray-900">Mobile
                                    Number</label>
                                <input type="number" id="mobile" name="mobile" value={formData.mobile}
                                       onChange={handleTextChange}
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                       spellCheck="false" data-ms-editor="true"/>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-lg text-gray-900">Password</label>
                                <input type="password" id="password" name="password" value={formData.password}
                                       onChange={handleTextChange}
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="text-center">
                                <button onClick={handleSubmit}
                                    className="text-white font-bold border-0 py-2 px-8 focus:outline-none rounded text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                    LOGIN
                                </button>
                            </div>

                            <p className="text-xs text-center text-gray-500 mt-3">If Dont have an Account <a
                                href="/register"
                                className="text-red-500 hover:underline cursor-pointer">Register</a> Here....</p>
                        </div>
                    </div>

                    </div>
            </section>
        </>
)
}