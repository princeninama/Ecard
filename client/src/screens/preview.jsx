import React from 'react'
import { useSelector } from 'react-redux'
const Preview = ({data}) => {
    const firstname = useSelector((state) => state.user.firstname);
    console.log(data);
    console.log(firstname);
  return (
    <div>
        {data}
    </div>
  )
}

export default Preview
