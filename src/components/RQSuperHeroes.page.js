
import {useState} from "react";
import {useRqSuperheroFetcher} from "../Hooks/useRqSuperheroFetcher";
import {Link} from "react-router-dom";
import {useRQPoster} from "../Hooks/useRQPoster";



function RQSuperHeroesPage() {

    const [name,setName]= useState('')
    const [alterEgo,setAlterEgo]=useState('')
    const [refetchInterval,setRefetchInterval] = useState(2000)
    const onSuccess = (data)=>{

        if (data.data.length >= 4) {
            setRefetchInterval(0)
        }else {
            setRefetchInterval(2000)
        }
    }

    const onError = (error) =>{
        console.log(error)
    }

  const {isLoading , data , isError ,error, refetch} =
      useRqSuperheroFetcher(refetchInterval ,onSuccess ,onError)

    // console.log(isLoading, isFetching)



    const {mutate : addHero} = useRQPoster()
    const AddHeroHandler=()=>{
        console.log({name , alterEgo})
        const hero = {name , alterEgo}
        addHero(hero)
    }

    if (isLoading){
        return <h2>Loading . . .</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }





    return (
<div className={"bg-gray-800 flex flex-col h-screen "} >

    <div className={'flex justify-center items-center m-3'} >

        <button className={"border-amber-300 text-amber-300 mr-2 border-2 "} onClick={AddHeroHandler} >post hero</button>
        <input
            type={"text"}
            value={name}
            onChange={(e)=>setName(e.target.value)}

        />
        <input
            type={"text"}
            value={alterEgo}
            onChange={(e)=>setAlterEgo(e.target.value)}
            className={'ml-1'}
        />
    </div>


      <button className={"border-amber-950 border-2 p-1"} onClick={refetch} >refetch</button>
    {data.data.map((hero)=>{
        return  <Link key={hero.id} className={'m-1.5'} to={`/RQSuperHeroes/${hero.id}`}> {hero.name} </Link>
    })}
</div>


    );
}

export default RQSuperHeroesPage;