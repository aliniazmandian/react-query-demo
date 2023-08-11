import {useQuery} from "react-query";
import axios from "axios";


function RQSuperHeroesPage(props) {

 const {isLoading , data , isError ,error} =  useQuery('super-heroes',()=>{
    return axios.get('http://localhost:4000/superheroes')
})

    console.log(isLoading)

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