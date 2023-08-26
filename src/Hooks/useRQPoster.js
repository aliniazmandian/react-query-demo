import {useMutation, useQueryClient} from "react-query";
import axios from "axios";

const addSuperHero = (hero)=>{
    axios.post(`http://localhost:4000/superheroes`,hero)
}

export const useRQPoster = ()=>{
    const queryClient = useQueryClient()
    return useMutation(addSuperHero,{
        onSuccess : ()=>{
            queryClient.invalidateQueries('super-heroes')
        }
    })
}