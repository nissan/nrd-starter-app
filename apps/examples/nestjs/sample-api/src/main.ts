import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Get the port from the environment variable, defaulting to 3000 if not defined
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
