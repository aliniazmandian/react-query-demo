import {useQuery} from "react-query";
import axios from "axios";
import {useState} from "react";
import {useRqSuperheroFetcher} from "../Hooks/useRqSuperheroFetcher";


function RQSuperHeroesPage(props) {

    const [refetchInterval,setRefetchInterval] = useState(2000)
    const onSuccess = (data)=>{
        console.log(data)
        if (data.data.length >= 4) {
            setRefetchInterval(0)
        }else {
            setRefetchInterval(2000)
        }
    }

    const onError = (error) =>{
        console.log(error)
    }

  const {isLoading , data , isError ,error, isFetching, refetch} =
      useRqSuperheroFetcher(refetchInterval ,onSuccess ,onError)

    console.log(isLoading, isFetching)

    if (isLoading){
        return <h2>Loading . . .</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }


    return (
<div className={"bg-gray-800 h-screen "} >
      <button className={"border-amber-950 border-2 p-1"} onClick={refetch} >refetch</button>
    {data.data.map((hero)=>{
        return  <div key={hero.id} >{hero.id}_{hero.name}</div>
    })}
</div>


    );
}

export default RQSuperHeroesPage;