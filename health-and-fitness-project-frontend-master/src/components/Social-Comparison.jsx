import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import moment from "moment";
axios.defaults.withCredentials = true;
export default function SocialComparison(){
    const router = useRouter()
    const [allComments,setAllComments] = useState([]);
    const [formData,setFormData] = useState({
        blogId: 1,
        comment: ''
    });
    useEffect(() => {
        getAllComments();
    }, []);

    const getAllComments = () => {
        axios
            .get(`http://localhost:3001/api/publicApi/getAllComments?blogId=1`)
            .then((response) => {
                if (response.status === 200) {
                    setAllComments(response.data.result);
                }
            })
            .catch((err) => {
            });
    }

    const handleTextChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = () => {
        if (!formData.comment) alert("Please write comment");
        else {
            axios
                .post(`http://localhost:3001/api/commentsApi/addComment`, {
                    blogId: formData.blogId,
                    comment: formData.comment
                })
                .then((response) => {
                    if (response.status === 201) {
                        getAllComments();
                        setFormData({
                            blogId: 1,
                            comment: ''
                        })
                        alert("comment added...");
                    } else alert("Please try again");
                })
                .catch((errors) => {
                    console.log(errors)
                    alert('Please login to add comment')
                    router.push('/login');
                });
        }
    }
    const ShowDateTime = (props) => {
        const date = new Date(props.timestamp);
        const tempDate = moment(date, 'DD MM YYYY, h:mm a');
        const formatedDate = moment(tempDate).format('Do MMM YYYY, h:mm a');
        return <>{formatedDate}</>;
    }

    return(
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-green-700 uppercase underline decoration-wavy">Social
                            Comparision
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-justify mt-4">
                            Health and fitness are essential aspects of overall well-being, encompassing physical,
                            mental, emotional, and social dimensions. Understanding and maintaining a balanced and
                            healthy lifestyle contribute to longevity, quality of life, productivity, happiness, and
                            overall satisfaction.
                        </p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-justify underline text-teal-500 mt-4">
                            1. Physical Health:
                        </p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-justify ">
                            Physical health refers to the optimal functioning and well-being of the body's physiological
                            systems, structures, organs, tissues, cells, and processes. It encompasses various aspects,
                            including nutrition, exercise, sleep, hygiene, cardiovascular health, muscular strength,
                            flexibility, endurance, metabolic rate, immune function, weight management, bone density,
                            respiratory function, digestive health, sensory perception, motor skills, mobility, physical
                            activity, and overall vitality.
                        </p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-justify underline text-teal-500 mt-4">
                            2. Mental and Emotional Health
                        </p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-justify">
                            Mental and emotional health are integral components of overall well-being, encompassing
                            cognitive, emotional, psychological, social, and behavioral aspects that influence how
                            individuals think, feel, act, relate, cope, adapt, and function in various aspects of life.
                        </p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-justify underline text-teal-500 mt-4">
                            3. Social and Behavioral Health:
                        </p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-justify">
                            Social and behavioral health focuses on the interplay between individual behaviors, social
                            interactions, cultural influences, environmental factors, community dynamics, societal
                            norms, policies, systems, and overall health outcomes. It emphasizes understanding,
                            promoting, and addressing various aspects related to social determinants of health, health
                            behaviors, lifestyle choices, community health, public health, health disparities, and
                            population health.
                        </p>

                        <div
                            className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end pt-4">
                            <div className="relative flex-grow w-full">
                                <textarea type="text" id="comment" name="comment" placeholder="write a comment"
                                          value={formData.comment}
                                          onChange={handleTextChange}
                                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div
                            className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 justify-center mt-2">
                            <button onClick={handleSubmit}
                                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit
                            </button>
                        </div>


                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="-my-8 divide-y-2 divide-gray-100">
                                    {allComments.map((obj, key) => {
                                        return (
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                    <span className="font-semibold title-font text-gray-700">{obj.userName}</span>
                                                    <span className="mt-1 text-gray-500 text-sm"><ShowDateTime timestamp={obj.createdAt}/></span>
                                                </div>
                                                <div className="md:flex-grow">
                                                    <p className="text-left leading-relaxed">{obj.comment}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </section>
        </>
    )
}