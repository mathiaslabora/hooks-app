import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {
      console.log("message mounted")
    
      return () => {
        console.log("message unmounted")
      }
    }, [])
    

  return (
   <>
   <h3>Usuario existe</h3>
   </>
  )
}
