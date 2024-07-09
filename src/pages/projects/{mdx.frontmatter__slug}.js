import * as React from 'react'
import { graphql } from 'gatsby'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import '../../styles/mdx-reset.css'

const BlogPost = ({data, children}) => {
  return (
    <>
      <title>Portfolio | {data.mdx.frontmatter.title}</title>
      <Navbar />
        <div className='mdx-reset px-12 py-10'>{children}</div>
      <Footer/>
    </>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
    }
  }
}
`

export default BlogPost