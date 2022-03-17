import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('events', (table: Knex.TableBuilder) => {
        table.increments()
        table.string('name');
        table.string('resume');
        table.string('description');
        table.dateTime('date')
        table.string('localization');
        table.timestamps();

    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('events');
}