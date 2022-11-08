import { Link, routes } from '@redwoodjs/router'
import CommentsCell from 'src/components/CommentsCell'



const truncate = (text,  length) => {

  return text.length > length ? text.substring(0, length) + '...' : text
}

const Article = ({ article, summary =false }) => {

  return (


    <article className='mt-10'>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">{article.body}
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      <br/>
      {!summary &&
      ( <div  className='mt-12'>
      <CommentsCell />
      </div> )

      }
    </article>
  )
}

export default Article
