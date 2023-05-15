// import { Sequelize } from 'sequelize-typescript';
// import { ParamStoreService } from '../aws/parameter-store';
// import { generateDynamicPort } from '../utils.ts/port';
// import { useSSHTunnel } from './ssh-tunnel';

// export class SequelizeConnection {
//   private static connected = false;
//   private static readConnection: Sequelize = null;
//   private static writeConnection: Sequelize = null;

//   static async connect() {
//     const paramStoreService = new ParamStoreService();

//     const {
//       RDS_DB_HOST,
//       DB_PASSWORD,
//       DB_USERNAME,
//       RDS_DB_NAME,
//       RDS_WRITE_DB_HOST,
//     } = await paramStoreService.getDbConfig();

//     if (process.env.USE_SSH_TUNNEL) {
//       const tunnelPort = generateDynamicPort();

//       await useSSHTunnel(RDS_DB_HOST, 5432, tunnelPort, async () => {
//         SequelizeConnection.readConnection = new Sequelize({
//           host: '127.0.0.1',
//           port: tunnelPort,
//           password: DB_PASSWORD,
//           username: DB_USERNAME,
//           database: RDS_DB_NAME,
//           dialect: 'postgres',
//         });
//       });

//       const tunnelWritePort = generateDynamicPort();

//       await useSSHTunnel(RDS_WRITE_DB_HOST, 5432, tunnelWritePort, async () => {
//         SequelizeConnection.writeConnection = new Sequelize({
//           host: '127.0.0.1',
//           port: tunnelWritePort,
//           password: DB_PASSWORD,
//           username: DB_USERNAME,
//           database: RDS_DB_NAME,
//           dialect: 'postgres',
//         });
//       });
//     } else {
//       SequelizeConnection.readConnection = new Sequelize({
//         host: RDS_DB_HOST,
//         password: DB_PASSWORD,
//         username: DB_USERNAME,
//         database: RDS_DB_NAME,
//         dialect: 'postgres',
//       });
//       SequelizeConnection.writeConnection = new Sequelize({
//         host: RDS_WRITE_DB_HOST,
//         password: DB_PASSWORD,
//         username: DB_USERNAME,
//         database: RDS_DB_NAME,
//         dialect: 'postgres',
//       });
//     }

//     SequelizeConnection.connected = true;
//   }

//   static async getWriteConnection() {
//     if (!SequelizeConnection.connected) {
//       await SequelizeConnection.connect();
//     }

//     return SequelizeConnection.writeConnection;
//   }

//   static async getReadConnection() {
//     if (!SequelizeConnection.connected) {
//       await SequelizeConnection.connect();
//     }

//     return SequelizeConnection.readConnection;
//   }
// }
