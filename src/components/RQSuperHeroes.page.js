import {useQuery} from "react-query";
import axios from "axios";


function RQSuperHeroesPage(props) {

 const {isLoading , data , isError ,error, isFetching} =  useQuery('super-heroes',()=>{
    return axios.get('http://localhost:4000/superheroes')

},
     {'cacheTime':5000})

    console.log(isLoading, isFetching)

    if (isLoading){
        return <h2>Loading . . .</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }


    return (
<div>
    {data.data.map((hero)=>{
        return  <div key={hero.id} >{hero.name}</div>
    })}
</div>


    );
}

export default RQSuperHeroesPage;