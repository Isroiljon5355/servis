import {
    faBroom,
    faDna,
    faPersonDigging,
    faTruck,
    faWrench
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
    {
        id: 1,
        title: "Yetkazib berish",
        icon: faTruck
    },
    {
        id: 2,
        title: "Santexnik va elektrik xizmatlari",
        icon: faWrench,
    },
    {
        id: 3,
        title: "Baxolash xizmatlari",
        icon: faDna,
    },
    {
        id: 4,
        title: "Tozalash xizmati",
        icon: faBroom
    },
    {
        id: 5,
        title: "Qurilish xizmatlari",
        icon: faPersonDigging
    },
]

function Card() {
    return (
        <div className=" pt-28">
            <h1 className="text-indigo-600 text-3xl text-center mt-6 font-semibold">Bizdagi mavjud xizmatlar</h1>
            <main>
                <div className="container w-full  md:px-20 mx-auto py-20">
                    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
                        {
                            data.map((item) => {
                                return <div key={item.id} className="bg-white p-6 shadow-md rounded-md">
                                    <div className="w-36 m-auto mt-2  h-36">

                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            size="2x"
                                        />

                                    </div>
                                    <br />
                                    <h3 className="mb-2 text-center text-2xl">{item.title}</h3>
                                    <a href="tel:+998996005355">
                                        <button className="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md">Biz bilan bog'lanish</button>
                                    </a>
                                </div>
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Card