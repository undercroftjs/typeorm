import { AuroraMysqlQueryRunner } from "./AuroraMysqlQueryRunner"
import { DataSource } from "@/data-source/DataSource"
import { DataSourceOptions } from "@/data-source"
import { QueryRunner } from "@/query-runner/QueryRunner"
import { ReplicationMode } from "@/driver/types/ReplicationMode"

/**
 * Organizes communication with MySQL DBMS.
 */
export class AuroraMysqlConnection extends DataSource {
    queryRunner: AuroraMysqlQueryRunner

    constructor(
        options: DataSourceOptions,
        queryRunner: AuroraMysqlQueryRunner,
    ) {
        super(options)
        this.queryRunner = queryRunner
    }

    public createQueryRunner(mode: ReplicationMode): QueryRunner {
        return this.queryRunner
    }
}
