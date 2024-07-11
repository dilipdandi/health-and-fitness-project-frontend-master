import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import {useRouter} from "next/router";
import axios from "axios";
export default function HealthMetrics(){
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const router = useRouter()
    const [healthMetrics,setHealthMetrics] = useState([]);
    const [formData,setFormData] = useState({
        weight: '',
        bloodPressure: '',
        sleepHours: ''
    });
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:3001/api/checkToken`)
    //         .then((response) => {
    //             if (response.status === 200) {
    //                 router.push('/');
    //             }
    //         })
    //         .catch((err) => {
    //         });
    // }, []);
    const handleTextChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = () => {
        if (!formData.weight) alert("Please enter name");
        else {
            axios
                .post(`http://localhost:3001/api/healthMetricsApi/addHealthMetrics`, {
                    weight : formData.weight,
                    bloodPressure : formData.bloodPressure,
                    sleepHours : formData.sleepHours
                })
                .then((response) => {
                    if (response.status === 201) {
                        alert("Thanks for Adding Health Metrics...")
                        setFormData({
                            weight: '',
                            bloodPressure: '',
                            sleepHours: ''
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
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-green-700 uppercase underline decoration-wavy">
                            Health Metrics
                        </h1>
                    </div>

                    <div className="text-end">
                        <button   onClick={openModal}
                            className=" text-white border-0 py-2 px-8 focus:outline-none rounded text-lg uppercase  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                          ADD
                        </button>
                    </div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-2xl text-center underline font-bold leading-6 text-gray-900"
                                            >
                                               Add Health Metrics
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                {/*<div className="flex flex-col items-center mt-10 mb-2">*/}
                                                {/*    <h1 className="text-lg text-start">Select a Date</h1>*/}
                                                {/*    <DatePicker*/}
                                                {/*        selected={selectedDate}*/}
                                                {/*        onChange={(date) => setSelectedDate(date)}*/}
                                                {/*        className="p-2 border rounded-md border-gray-500"*/}
                                                {/*        dateFormat="dd/MM/yyyy"*/}
                                                {/*    />*/}
                                                {/*</div>*/}
                                                <div className="p-2 w-full">
                                                    <div className="relative">
                                                        <label htmlFor="weight"
                                                               className="leading-7 text-lg">Select Date</label> <br/>
                                                        <DatePicker
                                                            selected={selectedDate}
                                                            onChange={(date) => setSelectedDate(date)}
                                                            className="p-2 border rounded-md border-gray-500"
                                                            dateFormat="dd/MM/yyyy"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <div className="relative">
                                                        <label htmlFor="weight"
                                                               className="leading-7 text-lg">Weight</label>
                                                        <input type="number" id="weight" name="weight"
                                                               value={formData.weight}
                                                               onChange={handleTextChange}
                                                               className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <div className="relative">
                                                        <label htmlFor="bloodPressure"
                                                               className="leading-7 text-lg">Blood Pressure</label>
                                                        <input type="number" id="bloodPressure" name="bloodPressure"
                                                               value={formData.bloodPressure}
                                                               onChange={handleTextChange}
                                                               className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <div className="relative">
                                                        <label htmlFor="sleepHours"
                                                               className="leading-7 text-lg">Sleep Hours</label>
                                                        <input type="number" id="sleepHours" name="sleepHours"
                                                               value={formData.sleepHours}
                                                               onChange={handleTextChange}
                                                               className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex gap-4 justify-center">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={handleSubmit}
                                                >
                                                   Submit
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>

                    <table className="min-w-full bg-white">
                        <thead>
                        <tr>
                            <th className="px-6 py-2 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                                Sr.No
                            </th>
                            <th className="px-6 py-2 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-2 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                                Weight
                            </th>
                            <th className="px-6 py-2 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                                Blood Pressure
                            </th>
                            <th className="px-6 py-2 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                                Sleep Hours
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {healthMetrics.map((obj, key) => {
                            return(
                                <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {obj.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {obj.weight}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {obj.bloodPressure}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {obj.sleepHours}
                                </td>
                            </tr>
                            )
                        })}
                        {/* Add more rows as needed */}
                        </tbody>
                    </table>

                </div>
            </section>
        </>
    )
}