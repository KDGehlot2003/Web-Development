import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';
import data from  "./Data.json"


// My Method
// const mytitle = () => {
//   for (let i = 0; i < data.length; i++) {
//     return data[i].title ;
//   }
// }


// .Map Method
// {data.map((item) => (
//   <Card title={item.title} />
// ))}


// Fetch Method
// function App({}) {

//   const [title, setTitle] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://api.genderize.io/?name=luc')
//     .then(response => {
//       if (!response.ok){
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       setTitle(data.name);
//       setLoading(false);
//     })
//     .catch(error => {
//       setError(error);
//       setLoading(false);
//     })
//   })

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>

//   return (
//     <>
//     <div className="container">
//       <h1>{title}</h1>
//       <Card title={title} />
//     </div>
//     </>

//   )
// }






function App({}) {

  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.genderize.io/?name=luc')
    .then(response => {
      if (!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setTitle(data.name);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    })
  })

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
    <div className="container">
      <h1>{title}</h1>
      <Card title={title} />
    </div>
    </>

  )
}

export default App
