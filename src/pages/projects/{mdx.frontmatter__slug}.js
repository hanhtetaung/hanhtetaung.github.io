
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import { GalleryContent } from '../../components/gallery-content';

const BlogPost = ({data, children}) => {  
  return (
    <>
      <Link to="/projects" className="text-blue-600">
      &#8701; Back
      </Link>

      <div className='my-8 prose min-w-full overflow-hidden prose-ul:leading-6 prose-a:text-blue-800'>{children}</div>

      { data.mdx.frontmatter.images && <GalleryContent images={data.mdx.frontmatter.images} /> } 
    </>
  )
}


export const query = graphql`
query ($id: String) {
 mdx(id: {eq: $id}) {
    frontmatter {
      title
      images {
        childImageSharp {
            gatsbyImageData
          }
      }
    }
  }
}
`

export default BlogPost