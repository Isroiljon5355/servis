import React from 'react'
import Yetkazish from "./yet.jpg"
import Image from 'next/image'
const data = [
    {
        id: 1,
        title: "Yetkazib berish",
        image: Yetkazish,

    }
]


function Card() {
    return (
        <div>
            <h1 className="text-indigo-600 text-3xl text-center mt-6 font-semibold">Bizdagi mavjud xizmatlar</h1>
            <main>
     
                <div className="container w-full  md:px-20 mx-auto py-20">
                    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
                        {
                            data.map((item) => {
                                return <div key={item.id} className="bg-white p-6 shadow-md rounded-md">
                                    <div>
                                        <Image
                                            src={item.image}
                                           
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <p className="mb-2">{item.title}</p>
                                    <a href="tel:+998996005355">biz bilan bog'lanish</a>
                                    <button className="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md">Cook This</button>
                                </div>
                            })
                        }

                        <div className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="text-xl text-gray-800 font-semibold mb-3">greek salad</h3>
                            <p className="mb-2">10 minutes to make</p>
                            <p className="my-4">blah blah blah</p>
                            <button className="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md">Cook This</button>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="text-xl text-gray-800 font-semibold mb-3">greek salad</h3>
                            <p className="mb-2">10 minutes to make</p>
                            <p className="my-4">blah blah blah</p>
                            <button className="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md">Cook This</button>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="text-xl text-gray-800 font-semibold mb-3">greek salad</h3>
                            <p className="mb-2">10 minutes to make</p>
                            <p className="my-4">blah blah blah</p>
                            <button className="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md">Cook This</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Card