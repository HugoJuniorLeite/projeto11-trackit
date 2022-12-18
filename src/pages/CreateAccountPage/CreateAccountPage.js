import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../providers/auth"
import { useNavigate } from "react-router-dom"

//import logo from "../../assets/images/track.svg"

export default function CreateAccountPage() {

    const navigate = useNavigate()

    const { inputs, setInputs, images, BASE_URL } = useAuth()

    function handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        //    const email =inputs.email
        //  const password =inputs.password
        //const name =inputs.name
        // const image = inputs.image
        //  const registrationForm =inputs
        //  console.log(registrationForm,"arquivo");

        axios.post(`${BASE_URL}/auth/sign-up`, inputs)
            .then((res) => navigate('/'))
            .catch((err) => console.log(err.respose.data, "deu ruim"))

    }

    return (

        <>

            <img src={images.logo} alt={images.description} />

            <form onSubmit={handleSubmit}>

                <label>
                    <input
                        placeholder="e-mail"
                        type="e-mail"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange} />
                </label>

                <label>
                    <input
                        placeholder="senha"
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange} />
                </label>

                <label>
                    <input
                        placeholder="nome"
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange} />
                </label>

                <label>
                    <input
                        placeholder="url da foto"
                        type="url"
                        name="image"
                        value={inputs.image || ""}
                        onChange={handleChange} />
                </label>

                <input type="submit" />
            </form>
            <Link to="/"><span>Já tem uma conta? Faça login!</span>
            </Link>

            <div>{inputs.email}</div>
        </>
    )
}