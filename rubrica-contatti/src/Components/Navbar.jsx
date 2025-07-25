import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="text-center text-gray-700 p-4 bg-sky-300 rounded ">
            <Link to="/" className="m-4 font-bold hover:underline">Home</Link>
            <Link to="/rubricaContatti" className="m-4 font-bold hover:underline">Rubrica Contatti</Link>
            <Link to="/dettaglioContatti/:id" className="m-4 font-bold hover:underline">Dettaglio Contatti</Link>
            <Link to="/preferiti" className="m-4 font-bold hover:underline">Pagina dei preferiti</Link>

        </div>
    )
}
export default Navbar