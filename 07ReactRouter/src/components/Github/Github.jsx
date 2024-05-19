import React, { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])    

    // useEffect(() => {
    //     fetch('https://api.github.com/users/kdgehlot2003')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'> 
    Github Followers: {data.followers}
    <img src={data.avatar_url} alt='avatar' className=' rounded-2xl m-4 h-44 w-44 mx-auto' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/kdgehlot2003') 
    return response.json()
}

