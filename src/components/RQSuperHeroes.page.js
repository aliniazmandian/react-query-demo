import {useQuery} from "react-query";
import axios from "axios";
import {useState} from "react";


function RQSuperHeroesPage(props) {

    const [refetchInterval,setRefetchIntertval] = useState(2000)
    const onSuccess = (data)=>{
        console.log(data)
        if (data.data.length >= 4) {
            setRefetchIntertval(0)
        }else {
            setRefetchIntertval(2000)
        }
    }

    const onError = (error) =>{
        console.log(error)
    }

  const {isLoading , data , isError ,error, isFetching, refetch} =  useQuery('super-heroes',()=>{
    return axios.get('http://localhost:4000/superheroes')
},
     {'cacheTime':50000,
         'staleTime':0,
         'refetchOnMount':false,
         'refetchOnWindowFocus' : false,
         'refetchInterval' : refetchInterval,
         onSuccess,
         onError
     }
     )

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