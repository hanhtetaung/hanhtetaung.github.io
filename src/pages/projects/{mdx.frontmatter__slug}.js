
import { graphql } from 'gatsby'
import Layout from '../../components/layout'


const BlogPost = ({data, children}) => {

  return (
    <Layout>
      <div className='prose min-w-full overflow-hidden prose-ul:leading-6 prose-a:text-blue-800'>{children}</div>
    </Layout>
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