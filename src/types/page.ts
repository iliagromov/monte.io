export type PageSSR = {
    name: string
    slug: string
    path: string
    template: string
    context: {
        id: string,
        slug: string,
        pageData: {
            title: string
            description: string
            titleH1: string
            models?: []
            engines?: []
            years?: []
            canonical?: string,
            brand?: string,
            model?: string,
            engine?: string,
            year?: string,
        }
    }
}