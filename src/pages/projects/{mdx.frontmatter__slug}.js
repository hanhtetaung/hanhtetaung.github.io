import * as React from 'react'
import { graphql } from 'gatsby'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const BlogPost = ({data, children}) => {
  return (
    <main>
      <title>Portfolio | {data.mdx.frontmatter.title}</title>
      <Navbar />
        <div className='container mx-auto p-4 py-16'>
          <div className='prose max-w-none prose-ul:leading-6 prose-a:text-blue-800'>{children}</div>
        </div>
      <Footer/>
    </main>
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