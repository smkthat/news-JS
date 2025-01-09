import News from './news/news';
import Sources from './sources/sources';

import type { INews } from './news/news';
import type { ISources } from './sources/sources';

interface NewsData {
    articles?: INews[];
}

interface SourcesData {
    sources?: ISources[];
}

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData): void {
        const values = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData): void {
        const values = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
