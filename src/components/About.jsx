import React from 'react'

const About = () => {
    return (
       <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quaerat et id in corporis dolor repellendus labore ab, saepe accusantium similique expedita vel repellat ea recusandae reiciendis sed rerum. Eligendi.
            </p>

            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ut perspiciatis molestias, autem veritatis asperiores saepe maiores quae nulla? Assumenda omnis, ducimus accusamus nemo vero ad, iste, corporis ut architecto quidem voluptas? Aliquam quae beatae officiis, placeat recusandae dicta at rem sequi pariatur delectus molestiae mollitia eaque laudantium ut ratione.
            </p>
        </div>
       </div>
    )
}

export default About
