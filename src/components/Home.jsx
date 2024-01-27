import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Home() {
    const [products,setproduct]=useState([])
    const Fectproduct=()=>{
        fetch("https://api.escuelajs.co/api/v1/products?limit=8&offset=0")
        .then(res=>res.json())
        .then(resp=>setproduct(resp))
    }
    useEffect(()=>{
       Fectproduct();
    },[])
  return (
    <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
  
        <p class="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>
  
       <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
         {
            products.map((pro)=>(
               <Link to={`/read/${pro.id}`}>
                   <Card url_img={pro.images} title={pro.title} price={pro.price}/>
               </Link>
            ))
         }
           
      </ul>
    </div>
  </section>
  )
}

export default Home