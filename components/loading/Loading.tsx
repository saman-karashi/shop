import React from 'react';
import {ClipLoader} from 'react-spinners';

const Loading = () => {
  return (
    <div style={{textAlign:'center',marginTop:'20rem'}} className='loading_wrapper'>
        <ClipLoader size={'150px'} color={'#333'}/>
    </div>
  )
}

export default Loading