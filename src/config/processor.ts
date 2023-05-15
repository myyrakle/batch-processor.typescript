import { TestProcessor } from '../processors/test.processor';

export interface IProcessor {
  run(): Promise<void>;
}

export enum Processor {
  TEST_PROCESSOR = 'TEST_PROCESSOR',
}

export const ProcessorMap: Map<Processor, IProcessor> = new Map([
  [Processor.TEST_PROCESSOR, new TestProcessor()],
]);
