const sitemapRoutesModifyingGenerator = function () {
  this.nuxt.hook('generate:done', async context => {
    this.nuxt.options.sitemap.routes = [...await Array.from(context.generatedRoutes), 'three']
  })
}

export default sitemapRoutesModifyingGenerator
