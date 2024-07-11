import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, {useState} from "react";

export default function Nutrition(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    return(
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-green-700 uppercase underline decoration-wavy">
                            Nutrition
                        </h1>
                    </div>
                    <div className="flex flex-col items-center mt-10 mb-5">
                        <h1 className="text-xl mb-2">Select a Date</h1>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            className="p-2 border rounded-md border-gray-500"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/4">
                            <div
                                className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src="/dhokala.JPG" width="720" height="400" alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-bold text-green-700 uppercase mb-3">
                                        Dhokala
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Calories: 150-200 kcal
                                    </p>
                                    <div
                                        className="text-center">
                                        <button
                                            className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div
                                className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src="/idli.jpg" width="720" height="400" alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-bold text-green-700 uppercase mb-3">
                                        Idli
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Calories: 40-50 kcal
                                    </p>
                                    <div
                                        className="text-center">
                                        <button
                                            className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div
                                className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src="/poha.jpg" width="720" height="400" alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-bold text-green-700 uppercase mb-3">
                                        poha
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Calories: 110-150 kcal
                                    </p>
                                    <div
                                        className="text-center">
                                        <button
                                            className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div
                                className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src="/samosa.webp" width="720" height="400" alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-bold text-green-700 uppercase mb-3">
                                        Samosa
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Calories: 250-300 kcal
                                    </p>
                                    <div
                                        className="text-center">
                                        <button
                                            className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4">
                            <div
                                className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src="/orange.jpeg" width="720" height="400" alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-bold text-green-700 uppercase mb-3">
                                        orange
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Calories: 80 kcal
                                    </p>
                                    <div
                                        className="text-center">
                                        <button
                                            className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div
                                className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src="/apple.jpeg" width="720" height="400" alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-bold text-green-700 uppercase mb-3">
                                        Apple
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Calories: 95-100 kcal
                                    </p>
                                    <div
                                        className="text-center">
                                        <button
                                            className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div
                                className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src="/mango.jpeg" width="720" height="400" alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-bold text-green-700 uppercase mb-3">
                                        Mango
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Calories: 100-120 kcal
                                    </p>
                                    <div
                                        className="text-center">
                                        <button
                                            className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4">
                            <div
                                className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src="/pineapple.jpeg" width="720" height="400" alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-bold text-green-700 uppercase mb-3">
                                        Pineapple
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Calories: 82 kcal
                                    </p>
                                    <div
                                        className="text-center">
                                        <button
                                            className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<section className="text-gray-600 body-font overflow-hidden">*/}
                    {/*    <div className="container px-5 py-24 mx-auto">*/}
                    {/*        <div className="-my-8 divide-y-2 divide-gray-100">*/}
                    {/*            {allComments.map((obj, key) => {*/}
                    {/*                return (*/}
                    {/*                    <div className="py-8 flex flex-wrap md:flex-nowrap">*/}
                    {/*                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">*/}
                    {/*                            <span*/}
                    {/*                                className="font-semibold title-font text-gray-700">{obj.userName}</span>*/}
                    {/*                            <span className="mt-1 text-gray-500 text-sm"><ShowDateTime*/}
                    {/*                                timestamp={obj.createdAt}/></span>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="md:flex-grow">*/}
                    {/*                            <p className="text-left leading-relaxed">{obj.comment}</p>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                );*/}
                    {/*            })}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>
            </section>
        </>
    )
}