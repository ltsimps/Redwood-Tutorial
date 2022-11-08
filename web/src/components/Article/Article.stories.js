import Article from './Article'


const ARTICLE = {
  id: 1,
  title: 'RedwoodJS is awesome',
  body: 'RedwoodJS is a full-stack framework for the Jamstack. It combines the simplicity of a single-page app with the power of server-side rendering. It’s built on React, GraphQL, and Prisma, and is designed to make it easy to get started and super fun to be productive.',
}

export const full = () => {

  return (
    <Article article={ARTICLE} />
  )
}

export const summary = () => {
  return  <Article article={ARTICLE} summary={true} />
}

export default { title: 'Components/Article' }
