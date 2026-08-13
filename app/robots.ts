import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'anthropic-ai', 'Claude-Web', 'Google-Extended'],
        allow: ['/', '/llms.txt'],
        disallow: ['/api/'],
      }
    ],
    sitemap: 'https://trentarev.com/sitemap.xml',
  };
}