import app from './app'
import { AppDataSource } from './db/conexion';

const port = 3306;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("database connected");
    // -------------------------------------------------
    app.listen(port, () => {
      console.log(`Server working on port ${port}`);
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    if (error instanceof Error) {
        console.error(error);
    }
        
  }
}
main();
