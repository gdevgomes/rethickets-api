import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      username: "filipeprado90",
      email: "filipe.prado@rethink.dev",
      password: "123456",
      first_name: "Filipe",
      last_name: "Prado",
      avatar: `https://ui-avatars.com/api/?name=Filipe+Prado`,
      admin: true,
    },
    {
      username: "gabrielgomes",
      email: "gabriel.gomes@rethink.dev",
      password: "123456",
      first_name: "Gabriel",
      last_name: "Gomes",
      avatar: `https://ui-avatars.com/api/?name=Gabriel+Gomes`,
      admin: true,
    },
    {
      username: "arthurvargas",
      email: "arthur.vargas@rethink.dev",
      password: "123456",
      first_name: "Arthur",
      last_name: "Vargas",
      avatar: `https://ui-avatars.com/api/?name=Arthur+Vargas`,
      admin: false,
    },
  ]);
}
