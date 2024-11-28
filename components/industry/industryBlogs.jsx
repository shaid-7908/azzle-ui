import React from 'react'
import { getBlogByCatagory } from '../hooks/getBlogs'
function IndustryBlogs() {
  const data = getBlogByCatagory('hh')
  return (
    <div>industryBlogs</div>
  )
}

export default IndustryBlogs