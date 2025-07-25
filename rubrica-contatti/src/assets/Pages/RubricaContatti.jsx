import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const RubricaContatti = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);
    const API_URL = " https://dummyjson.com/users"

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL, { method: "GET" })
            const data = await response.json()
            setUsers(data.users)
            console.log(data.users)

        } catch (error) {
            console.log(error)
        }
    }

    const handleDettaglio = (users) => {
        navigate(`/dettaglioContatti/${users.id}`)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {/* <DettaglioContatti user={userDettaglio} /> */}
            <div className=" w-[1440px]  ">
                <div className="flex flex-wrap ml-32 w-[1200px] p-10 mt-20 mr-10 rounded bg-sky-200">
                    {
                        users && Array.isArray(users) && users.map((user) => (

                            <div key={user.id} onClick={() => handleDettaglio(user)} className="flex  border rounded border-cyan-600 bg-gray-100 p-2 ml-20  m-0.5 w-[450px]  ">
                                <div>
                                    <img className="w-10 m-2" src={user.image} alt="" />
                                </div>
                                <div>
                                    <div> <span className="font-bold m-1">Nome:</span> {user.firstName}</div>
                                    <div><span className="font-bold m-1">Cognome:</span> {user.lastName}</div>
                                    <div><span className="font-bold m-1">Email:</span> {user.email}</div>
                                    <div><span className="font-bold m-1">Phone:</span> {user.phone}</div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default RubricaContatti