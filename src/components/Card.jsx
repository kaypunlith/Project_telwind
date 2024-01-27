import React from 'react'

function Card(props) {
  return (
    <>
  
      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src={props.url_img}
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative bg-white pt-3">
            <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              {props.title}
            </h3>

            <p class="mt-2">
              <span class="sr-only"> Regular Price </span>

              <span class="tracking-wider text-gray-900"> £{props.price} GBP </span>
            </p>
          </div>
        </a>
      </li>      
    </>
  )
}

export default Card