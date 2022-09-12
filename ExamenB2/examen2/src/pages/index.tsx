

interface Props{
    escuelas:any[]
}
export default function index(props:Props){
    console.log(props.escuelas);


}
export const getServerSideProps = async () => {
    const res=await fetch('http://localhost:3000/api/escuelas')
    const escuelas = await res.json()

    console.log(escuelas)

    return{
        props:{
          escuelas:escuelas,
        },
    }
}