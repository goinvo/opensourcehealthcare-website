import config from '../config.js'

export function mediaUrl(path) {
  return `${config.cloudfrontUrl}${path}`
}

export function formatDate(date) {
  date = new Date(date)

  const day = date.toLocaleString('en-us', { day: '2-digit' })
  const month = date.toLocaleString('en-us', { month: 'short' })
  const year = date.toLocaleString('en-us', { year: '2-digit' })

  return `${day}.${month}.${year}`
}

export function extractArticleDataFromQuery(data) {
  return data.allMdx.edges.map(edge => {
    return {
      slug: edge.node.parent.name,
      ...edge.node.frontmatter,
    }
  })
}

export function findArticleById(data, id) {
  return data.allMdx.edges.find(({ node }) => {
    return node.id === id
  }).node
}

export function extractArticleLinkDetails(item) {
  const link = item.slug ? `/work/${item.slug}` : item.link
  const externalLink = item.slug
    ? false
    : item.link.includes('/vision/')
      ? false
      : true
  const suppressNewTab = item.external ? false : true

  return {
    link,
    externalLink,
    suppressNewTab,
  }
}

export function debounce(func, wait, immediate) {
  var timeout
  return function() {
    var context = this,
      args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
