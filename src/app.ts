import { App } from '@jovotech/framework';
import { AlexaPlatform } from '@jovotech/platform-alexa';
import { ComponentA } from './components/ComponentA';
import { ComponentB } from './components/ComponentB';

/**
 * Jovo App initialization.
 */
export const app = new App({
    components: [ComponentA, ComponentB],
    plugins: [new AlexaPlatform()],
});
