import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Questions } from "./questions.entity";
import { QuestionsService } from "./questions.service";

@Module({
  imports: [TypeOrmModule.forFeature([Questions])],
  providers: [QuestionsService],
})
export class QuestionsModule {}
