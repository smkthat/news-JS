import './sources.css';

export interface ISources {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export default class Sources {
    draw(data: ISources[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            console.error('Template element not found');
            return;
        }

        data.forEach((item: ISources) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const itemNameElement = sourceClone.querySelector<HTMLElement>('.source__item-name');
            const itemElement = sourceClone.querySelector<HTMLElement>('.source__item');

            if (itemNameElement) {
                itemNameElement.textContent = item.name;
            }

            if (itemElement) {
                itemElement.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}
