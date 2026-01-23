import { http, HttpResponse } from 'msw'

const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000/api'

export const handlers = [
  http.get(`${API_URL}/formats`, () => {
    return HttpResponse.json({
      formats: [
        { value: 0, name: 'kebab-case' },
        { value: 1, name: 'PascalCase' },
      ],
    })
  }),

  http.get(`${API_URL}/languages`, () => {
    return HttpResponse.json({
      languages: [
        { value: 0, name: 'English', code: 'en' },
        { value: 1, name: 'Polish', code: 'pl' },
      ],
    })
  }),

  http.get(`${API_URL}/themes`, () => {
    return HttpResponse.json({
      themes: [
        { value: 0, name: 'none' },
        { value: 1, name: 'proper-names' },
        { value: 2, name: 'politicians' },
      ],
    })
  }),

  http.post(`${API_URL}/links`, () => {
    return HttpResponse.json({
      url: 'http://offnd.at/test-phrase',
      statsUrl: 'http://offnd.at/stats/test-phrase',
    })
  }),

  http.get(`${API_URL}/links/:phrase`, ({ params }) => {
    const { phrase } = params
    return HttpResponse.json({
      id: '1',
      phrase: phrase as string,
      targetUrl: 'https://example.com',
      languageId: 1,
      themeId: 0,
      visits: 10,
      recentVisits: [],
      createdAt: new Date().toISOString(),
    })
  }),
]
