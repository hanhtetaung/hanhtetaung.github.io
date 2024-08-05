
import { graphql } from 'gatsby'


const BlogPost = ({data, children}) => {

  return (
    <>
      <div className='prose min-w-full overflow-hidden prose-ul:leading-6 prose-a:text-blue-800'>{children}</div>
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