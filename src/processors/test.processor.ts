import { IProcessor } from '../config/processor';

export class TestProcessor implements IProcessor {
  async run() {
    console.log('test');

    // console.log(
    //   await connection.query(`select 'check'`, { type: QueryTypes.SELECT }),
    // );
  }
}
