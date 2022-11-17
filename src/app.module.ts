import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { DBconfig } from '@app/ormconfig';
import { TagModule } from '@app/tag/tag.module';

@Module({
  imports: [TagModule, TypeOrmModule.forRoot(DBconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
