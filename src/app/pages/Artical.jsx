import React from 'react'
import ReadMoreButton from './ReadMoreButton'

const Artical = ({title,image}) => {

  
    return (
       
        <div className=''>

            <article className=" h-[100%] flex flex-col w-full relative max-w-sm mx-auto transition-all duration-200 ease-out rounded-lg shadow-md bg-article-light dark:bg-article-dark shadow-article-light-secondary/70 dark:shadow-article-dark-primary/70 hover:shadow-xl hover:shadow-article-light-secondary dark:hover:shadow-dark-primary">
                <a href="" className='hover:cursor-pointer justify-end absolute right-5 mt-3'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-gray-100 hover:text-red-500 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 21.35l-1.45-1.32C5.4 16.13 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.63-8.55 11.54L12 21.35z"
                            fill="currentColor"
                        ></path>
                    </svg>


                </a>
                {
                    image &&
                        <img src={image} className="object-cover w-full rounded-t-lg h-60 " /> 
                       

                }
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col flex-1 p-5">
                        <h2 className="font-serif font-bold text-article-dark dark:text-article-light">{title}</h2>
                        <section className="flex-1 mt-2">
                            <p className="text-xs line-clamp-3 text-article-dark-primary dark:text-article-light-primary">The accolades keep coming in for Jackson Holliday. Holliday, the No. 1 prospect in baseball, was named the Orioles&#x2019; Brooks Robinson Minor League Player</p>
                        </section>
                      
                    </div>
                    <ReadMoreButton />
                </div>
            </article>
        </div>
    )
}

export default Artical
