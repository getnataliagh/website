/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://getnatalia.com",
  generateRobotsTxt: true, // (optional)
  exclude: ["/wip-*"],
};
