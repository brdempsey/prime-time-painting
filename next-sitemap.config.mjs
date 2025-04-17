/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://primetimewichita.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  outDir: './public',
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
