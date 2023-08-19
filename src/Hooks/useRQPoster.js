import {useMutation} from "react-query";
import axios from "axios";

const addSuperHero = (hero)=>{
    axios.post(`http://localhost:4000/superheroes`,hero)
}

export const useRQPoster = ()=>{

    return useMutation(addSuperHero)
}