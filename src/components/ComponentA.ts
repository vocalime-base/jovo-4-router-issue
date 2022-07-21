import {
    BaseComponent,
    Component,
    Global,
    Intents,
    PrioritizedOverUnhandled,
} from '@jovotech/framework';

@Component()
export class ComponentA extends BaseComponent {
    async START(): Promise<void> {
        return;
    }

    @Global()
    @Intents('IntentA')
    @PrioritizedOverUnhandled()
    async intentA(): Promise<void> {
        return this.$send('intentA');
    }

    @Intents('IntentB')
    @PrioritizedOverUnhandled()
    async intentB(): Promise<void> {
        return this.$send('intentB');
    }
}
