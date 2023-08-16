
import {useState} from "react";
import {useRqSuperheroFetcher} from "../Hooks/useRqSuperheroFetcher";
import {Link} from "react-router-dom";



function RQSuperHeroesPage() {

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

    if (isLoading){
        return <h2>Loading . . .</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }


    return (
<div className={"bg-gray-800 flex flex-col h-screen "} >
      <button className={"border-amber-950 border-2 p-1"} onClick={refetch} >refetch</button>
    {data.data.map((hero)=>{
        return  <Link className={'m-1.5'} to={`/RQSuperHeroes/${hero.id}`}> {hero.name} </Link>
    })}
</div>


    );
}

export default RQSuperHeroesPage;