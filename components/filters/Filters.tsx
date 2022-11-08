import { NextPage } from 'next';
import {useContext} from 'react';
import { MyContext } from '../../store/Context';

const Filters:NextPage = () => {
const {
setFilter
} = useContext(MyContext);

const filtersHandler = (e:any)=>{
const text = e.target.textContent.toLowerCase();
setFilter(text);
}


return (
    <div className='filters my_1 px_1'>
      <div className="filters_wrapper">
       <div onClick={filtersHandler} className="filter">All</div>
       <div onClick={filtersHandler} className="filter">Electronics</div>
       <div onClick={filtersHandler} className="filter">Jewelery</div>
       <div onClick={filtersHandler} className="filter">Women&#39;s clothing</div>
       <div onClick={filtersHandler} className="filter">Men&#39;s clothing</div>
      </div>
    </div>
  )
}

export default Filters