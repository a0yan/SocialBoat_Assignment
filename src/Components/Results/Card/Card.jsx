import React from 'react'

const Card = ({ heading, tags, text, video }) => {
    return (
        <div className="flex flex-col my-2">
            <div className="rounded-lg shadow-lg bg-white max-w-sm border-2" >
                <a href="#!">
                <video src={video} width="600" height="300"  autoPlay={false} controls muted />
                </a>
                <div className="p-6 w-full flex flex-col">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{heading.split(':')[0]}-{heading.split(':')[1]}</h5>
                    <div className='flex justify-between py-2'>{tags.map((tag,index)=>(
                        <div key={`${heading}-${tag}${index}`} className={`hover:scale-125 transition-all hover:cursor-pointer ease-in border-2 rounded-md py-1 px-[2px] ${index===0?'border-blue-500 hover:bg-blue-500 hover:text-white':''} ${index===1?'border-red-500 hover:bg-red-500 hover:text-white':''}  ${index===2?'border-green-500 hover:bg-green-500 hover:text-white':''}  `}>{tag}</div>
                    ))}</div>
                    <p className="text-gray-700 break-words py-1">
                        {text.split(':')[1]}
                    </p>
                    </div>
            </div>
        </div>
    )
}

export default Card