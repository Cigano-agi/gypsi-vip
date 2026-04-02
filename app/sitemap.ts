import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://gypsi.vip', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://gypsi.vip/guild', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://gypsi.vip/cursos', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://gypsi.vip/ventures', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://gypsi.vip/consultoria', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
