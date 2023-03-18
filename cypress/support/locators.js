
const locators = {
    PESQUISA: {
        MENU: '#overlay-open',
        PESQUISAR: '.mobile-search > .search-form > label > .search-field',
        RESULTADO: '.archive-title',
        CATEGORIA: '#post-3338 > .meta-main-wrap > .entry-header > .entry-cats > [href="https://blogdoagi.com.br/category/suas-financas/',
        SEM_RESULTADO: '.entry-title',
        NOVA_PESQUISA: '.entry-content > .search-form > label > .search-field'
    },
    POST: {
        IMPOSTO: '#post-3087 > .meta-main-wrap',
        FINANÇAS: '#post-3338 > .meta-main-wrap > .entry-main > .entry-header > .entry-title > a'
    },
    TAG: {
        SEUS_INVESTIMENTOS: '.entry-cats > a',
        SUAS_FINANCAS: '.entry-cats > [href="https://blogdoagi.com.br/category/suas-financas/"]'
    }
}

export default locators;