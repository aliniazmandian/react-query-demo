import {useQuery} from "react-query";
import axios from "axios";


 export const useRqSuperheroFetcher   =  (onError ,onSuccess ,refetchInterval) =>{
     return  useQuery('super-heroes',()=>{
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
}