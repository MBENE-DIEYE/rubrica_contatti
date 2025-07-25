import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DettaglioContatti = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contatto, setContatto] = useState(null);
    const [formData, setFormData] = useState(null);

    const API_URL = `https://dummyjson.com/users/${id}`;

    useEffect(() => {
        const fetchContatto = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setContatto(data);
                setFormData(data);
            } catch (error) {
                console.error("Errore durante il fetch:", error);
            }
        };

        fetchContatto();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        alert("Modifica salvata (solo lato client).");
        setContatto(formData);
    };

    const handleDelete = () => {
        alert("Contatto eliminato (solo lato client).");
        navigate("/rubricaContatti");
    };

    if (!formData) return <p>Caricamento contatto...</p>;

    return (
        <div>
            <div className="bg-sky-200 mt-20 rounded pl-40 mx-40">
                <div className="p-20  ml-40">
                    <h2 className="text-2xl font-bold mb-6">Dettaglio Contatto</h2>

                    <img className="w-24 rounded mb-4" src={formData.image} alt={formData.firstName} />

                    <div className="flex flex-col gap-4 max-w-md">
                        <label>
                            Nome:
                            <input
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="border p-2 w-full rounded"
                            />
                        </label>

                        <label>
                            Cognome:
                            <input
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border p-2 w-full rounded"
                            />
                        </label>

                        <label>
                            Email:
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border p-2 w-full rounded"
                            />
                        </label>

                        <label>
                            Telefono:
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border p-2 w-full rounded"
                            />
                        </label>

                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Salva modifiche
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Elimina contatto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DettaglioContatti;
