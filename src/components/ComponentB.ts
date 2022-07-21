import { BaseComponent, Component } from '@jovotech/framework';

@Component()
export class ComponentB extends BaseComponent {
    async START(): Promise<void> {
        return;
    }

    async UNHANDLED(): Promise<void> {
        return this.$send('UNHANDLED');
    }
}
