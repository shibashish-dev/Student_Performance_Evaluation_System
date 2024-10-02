import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export async function connectToDatabase() {
  if (isConnected) {
    console.log('Already connected to the database.');
    return;
  }

  try {

    const clientOptions = { dbName: 'EducTin' };

    await mongoose.connect(process.env.MONGODB_URI,clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });

    isConnected = true;
    console.log('Connected to the MongoDB database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Failed to connect to the database.');
  }
}
