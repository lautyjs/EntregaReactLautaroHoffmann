import { useState } from "react"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("")

    const manejadorFormulario = (e) => {
        e.preventDefault()

        addDoc(collection(db, "usuarios"), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
        })

        setNombre("")
        setApellido("")
        setTelefono("")
        setEmail("")
    }


  return (
    <div>
        <form onSubmit={manejadorFormulario}>
            <h2>Formulario de Clientes</h2>

            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <br /><br />

            <label htmlFor="">Apellido</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            <br /><br />

            <label htmlFor="">Telefono</label>
            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            <br /><br />

            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br /><br />

            <button> Enviar </button>
        </form>




    </div>
  )
}

export default Formulario