import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsTable1750184805212 implements MigrationInterface {
    name = 'CreateProductsTable1750184805212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_8898b6830f057f3f5c239796fa7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "price" numeric(10,2) NOT NULL, "active" boolean NOT NULL DEFAULT true, "customerId" uuid, CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD CONSTRAINT "FK_80e87b6213a59ec0af7ec277f43" FOREIGN KEY ("customerId") REFERENCES "customer_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_entity" DROP CONSTRAINT "FK_80e87b6213a59ec0af7ec277f43"`);
        await queryRunner.query(`DROP TABLE "product_entity"`);
        await queryRunner.query(`DROP TABLE "customer_entity"`);
    }

}
