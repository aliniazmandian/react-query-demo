import {useParams} from "react-router-dom";
import {useRqSuperHeroDetailFetcher} from "../Hooks/useRqsuperHeroDetailFetcher";



function RQSuperHeroPage() {

   const {heroId} =  useParams()
    const {isLoading ,data ,error ,isError } = useRqSuperHeroDetailFetcher(heroId)

   if  (isLoading) {
       return <div>Loading . . . </div>
   }


    if (data) {
        return <div> {data?.data.alterEgo} </div>
    }


}

export default RQSuperHeroPage;