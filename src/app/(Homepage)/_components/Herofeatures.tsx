import Image from 'next/image'
import React from 'react'
import { Button } from '~/components/ui/button'

const Herofeatures = () => {
  return (
    <section className='px-4 md:px-8 flex items-center flex-col justify-center gap-16 py-8 min-h-screen'>
        <h1 className='text-5xl w-2/3 text-center'>Discover Our Weekly Services and Community Engagement Opportunities</h1>
        <div className='grid grid-cols-3 gap-4'>
            <div className='p-4 flex flex-col gap-4 border-2 rounded-xl min-h-[312px]'>
                <div className='bg-[#F7F7F7] size-16 relative p-4 rounded-md'>
                    <Image src={"https://img.freepik.com/premium-vector/christian-cross-with-radiant-beams-symbol-faith-hope-vector-illustration-eps-10_213497-3373.jpg"} alt='' fill/>
                </div>
                <h2 className='text-3xl'>Join Us for Uplifting Worship and Inspiring Messages Every Sunday</h2>
                <p>Experience a welcoming environment where faith and community come together.</p>
                <Button variant={"expandIcon"} className='w-fit bg-green-700 from-green-300'>Learn more</Button>
            </div>
            <div className='p-4 flex flex-col gap-4 border-2 rounded-xl min-h-[312px]'>
                <div className='bg-[#F7F7F7] relative size-16 p-4 rounded-md'>
                <Image src={"https://c8.alamy.com/comp/2HEM7A9/team-work-line-icon-four-hands-togetherness-unity-symbol-2HEM7A9.jpg"} alt='' fill/>

                </div>
                <h2 className='text-3xl'>Get Involved in Our Exciting Church Programs and Activities</h2>
                <p>Participate in various programs designed to enrich your spiritual journey.</p>
                <Button variant={"expandIcon"} className='w-fit bg-green-700 from-green-300'>Learn more</Button>
            </div>
            <div className='p-4 flex flex-col gap-4 border-2 rounded-xl min-h-[312px]'>
                <div className='bg-[#F7F7F7] size-16 relative p-4 rounded-md'>
                <Image src={"https://media.istockphoto.com/id/1071357272/vector/vector-cross-silhouette-with-blood-and-shadow.jpg?s=612x612&w=0&k=20&c=a1X_hq3gV-iI6i7Ww_UowAjVxPMvK4Z7JEJIEX0hqFY="} alt='' fill/>
                </div>
                <h2 className='text-3xl'>Make a Difference Through Our Community Outreach Initiatives</h2>
                <p>Join hands with us to serve those in need and spread love.</p>
                <Button variant={"expandIcon"} className='w-fit bg-green-700 from-green-300'>Learn more</Button>
            </div>
        </div>
    </section>
  )
}

export default Herofeatures