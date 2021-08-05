import mongoose from 'mongoose';

export class DbConnection {
  public static async initConnection(): Promise<any> {
    await DbConnection.connect(process.env.MONGO_URI as string);
  }

  public static async connect(connStr: string): Promise<any> {
    return mongoose
      .connect(connStr, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log(`Successfully connected to ${connStr}`);
      })
      .catch(error => {
        console.error('Error connecting to database: ', error);

        return process.exit(1);
      });
  }

  public static setAutoReconnect(): void {
    mongoose.connection.on('disconnected', () => DbConnection.connect(`${process.env.MONGO_URI}`));
  }

  public static async disconnect(): Promise<any> {
    await mongoose.connection.close();
  }
}
