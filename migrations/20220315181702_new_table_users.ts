import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments()
        table.string('name');
        table.string('email');
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('users');
}