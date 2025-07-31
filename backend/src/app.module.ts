import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { IngredientsModule } from './modules/ingredients/ingredients.module';

@Module({
  imports: [PrismaModule, AuthModule, IngredientsModule],
})
export class AppModule {}
