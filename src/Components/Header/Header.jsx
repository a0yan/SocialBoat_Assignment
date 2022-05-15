import React from 'react'
import { useSearchParams,Link } from 'react-router-dom';
import Search from '../../assets/icons8-search.svg'
import profile_pic from '../../assets/taylor-8Vt2haq8NSQ-unsplash.jpg'
const Header = () => {
    const [search, setSearch] = useSearchParams();

    const handleSearch = (event) => {
        let search;
        if (event.target.value) {
          search = {
            keyword: event.target.value
          }
        } else {
          search =undefined;
        }
    
        setSearch(search,{replace:true})
        }
    return (
        <div className='w-full h-30 bg-yellow-400 justify-center flex flex-col p-2 '>
            <div className='flex justify-between py-2'>
                <Link to='/'> <h3 className='text-4xl font-semibold'>Social Boat</h3></Link>
                <div className='w-16 h-16 border-4 border-black mr-6 '> <img className=' w-full h-full ' alt='Profile Pic' src={profile_pic}/> </div>
            </div>
            <div className='bg-white h-8 w-full flex space-x-4 '>
            <img className='h-8 w-8' src={Search} alt='Search Icon' />
            <input className='w-full h-full outline-none' placeholder=' Search' value={search.get('keyword')!==null?(search.get('keyword')):''} onChange={(event)=>handleSearch(event)}/></div>

        </div>
    )
}

  export default Header