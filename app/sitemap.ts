import { MetadataRoute } from 'next';
import { allArticles } from './resources/data';
import { allDocs } from './docs/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: 'https://trentarev.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Top-Level Sitelinks (Promoted content to appear in Google search results)
    {
      url: 'https://trentarev.com/#pricing',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://trentarev.com/#features',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://trentarev.com/docs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://trentarev.com/resources',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://trentarev.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://trentarev.com/terms',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://trentarev.com/llms.txt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  const resourceRoutes = allArticles.map((article) => ({
    url: `https://trentarev.com/resources/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const docsRoutes = allDocs.map((doc) => ({
    url: `https://trentarev.com/docs/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85, // Promoted sub-parts of docs to ensure Google discovers them as high-value sitelinks
  }));

  return [...routes, ...resourceRoutes, ...docsRoutes];
}