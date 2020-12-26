import { EntityRepository, Repository } from "typeorm";
import { Questions } from "./questions.entity";

@EntityRepository(Questions)
export class UserRepository extends Repository<Questions> {}
