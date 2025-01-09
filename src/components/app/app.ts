import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews } from '../view/news/news';
import { ISources } from '../view/sources/sources';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: Event) => {
                const mouseEvent = e as MouseEvent;
                this.controller.getNews(mouseEvent, (data: { articles: INews[] }) => this.view.drawNews(data));
            });
        }
        this.controller.getSources((data: { sources: ISources[] }) => this.view.drawSources(data));
    }
}

export default App;
