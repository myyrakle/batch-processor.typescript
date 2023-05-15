import { program } from 'commander';
import { ProcessorMap } from './config/processor';
import * as dotenv from 'dotenv';
import { sleep } from './utils.ts/sleep';

async function main() {
  dotenv.config({ path: '.env' });

  program.option('-p, --processor <type>');
  program.parse(process.argv);

  const options = program.opts();

  const processorName: any = options.processor;

  const processor = ProcessorMap.get(processorName);

  if (!processor) {
    throw new Error(`'${processorName}' processor not found`);
  }

  const startTime = new Date();
  console.log('### start at:', startTime);

  await processor.run();

  const endTime = new Date();

  console.log('### end at:', endTime);

  const elapsedSeconds = Math.round(
    (endTime.getTime() - startTime.getTime()) / 1000,
  );

  console.log(`### elapsed: ${elapsedSeconds} seconds`);
}

main();
