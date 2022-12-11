import { useContext } from "react"
import { PlacesContext } from "../context"
import { Loading } from "./"

export const MapView = () => {

    const {isLoading,userlocation} = useContext(PlacesContext)
    if(isLoading){
        return (<Loading/>)
    }
  return (
    <div>{userlocation?.join(',')}</div>
  )
}
