
import Layout from "../components/Layout";
import {number} from "prop-types";

const MiPerfilPage =()=> {

    const arreglo = [1,2,3,4,5,6,7,8];

    const listaNumeros= arreglo.filter((a)=>a<5)
        .map((a)=>{
            return (
                <li>
                    {a}
                </li>

            )


        })


    return(
        ///solo puede devolver un elemento
        /// eL fOReach ya no sirve


        <Layout>
            <p> hola {'Fernando'.toUpperCase()}</p>
            <ul>


                    {listaNumeros}

            </ul>

        </Layout>
    )
}

export default MiPerfilPage