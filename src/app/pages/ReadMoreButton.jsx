import React from 'react'
import Link from "next/link"

const ReadMoreButton = () => {
  return (
    <div>
       <Link href={{
            pathname: '/article',
            

        }}
            prefetch={false}
            className="flex justify-center items-center bg-blue-500 h-10 rounded-b-lg text-white hover:bg-blue-700">Read More</Link>
    </div>
  )
}

export default ReadMoreButton
