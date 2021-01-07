import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path from "path";

const baseDir = path.join(__dirname, "../");
console.log(baseDir);
const entitiesPath = `${baseDir}${process.env.TYPEORM_ENTITIES}`;
const migrationPath = `${baseDir}${process.env.TYPEORM_MIGRATIONS}`;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || "5432", 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  // entities: [baseDir + '**/*.entity.{js,ts}'],
  entities: [entitiesPath],
  migrations: [migrationPath],
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === "true", // Autorun migrations on every launch
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    // entitiesDir: 'src/db/entities'
  },
  logging: process.env.TYPEORM_LOGGING === "true",
  logger: "advanced-console",
  // If env variable is not present, assume it to be true. If present, check if its true in string type. If not, its false
  synchronize: process.env.TYPEORM_SYNC
    ? process.env.TYPEORM_SYNC === "true"
    : true,
};

// export = typeOrmConfig