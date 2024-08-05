
import { graphql } from 'gatsby'
import { Link } from 'gatsby';

const BlogPost = ({data, children}) => {

  return (
    <>
      <Link to="/projects" className="text-blue-600">
      &#8701; Back
      </Link>

      <div className='mt-6 prose min-w-full overflow-hidden prose-ul:leading-6 prose-a:text-blue-800'>{children}</div>
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