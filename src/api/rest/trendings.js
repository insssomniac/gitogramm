import { makeRequest } from '../requests'

export const getTrendings = (lang = 'javascript') => {
  const params = new URLSearchParams()
  const weekMS = 7 * 24 * 60 * 60 * 1000
  const weekAgo = new Date(Date.now() - weekMS)

  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(weekAgo)
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(weekAgo)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(weekAgo)
  const formattedDate = `${ye}-${mo}-${da}` // yyyy-mm-dd

  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', 10)
  params.append('q', `language:${lang} created:>${formattedDate}`)

  return makeRequest({
    url: `/search/repositories?${params}`
  })
}
