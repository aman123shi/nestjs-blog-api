import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { DBconfig } from '@app/ormconfig';
import { TagModule } from '@app/tag/tag.module';
import { UserModule } from '@app/user/user.module';
@Module({
  imports: [TagModule, TypeOrmModule.forRoot(DBconfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
