import { app } from '../src/app';
import { TestSuite } from '@jovotech/framework';
import { AlexaPlatform } from '@jovotech/platform-alexa';
import AlexaIntentA from './AlexaIntentA.json';
import AlexaIntentB from './AlexaIntentB.json';

const testSuite = new TestSuite({ app, platform: AlexaPlatform });

/**
 * In both cases we're inside ComponentB, which has only the UNHANDLED handler.
 * The only difference is that intentA handler is global and intentB isn't.
 */

/**
 * In this case, I expect the request to match intentA in ComponentA, since ComponentA is part of the state stack
 * and intentB has @PrioritizedOverUnhandled() annotation. This works.
 */
test('check if the request gets routed to intentA in ComponentA', async () => {
    // @ts-ignore
    const result = await testSuite.run(AlexaIntentA);
    expect(result.response.response.outputSpeech?.ssml).toContain('intentA');
});

/**
 * In this case, I expect the request to match intentB in ComponentA, since ComponentA is part of the state stack
 * and intentB has @PrioritizedOverUnhandled() annotation.
 * This fails since the request gets handled by UNHANDLED in ComponentB.
 */
test('check if the request gets routed to intentB in ComponentA', async () => {
    // @ts-ignore
    const result = await testSuite.run(AlexaIntentB);
    expect(result.response.response.outputSpeech?.ssml).toContain('intentB');
});
