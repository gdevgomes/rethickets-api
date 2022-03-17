import bcrypt from "bcrypt";

const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

const isValidEmail = (email: string) => {
  const validate = /(?<NomeDeEmail>[\w+\.]+\w+)@(?<Dominio>rethink.dev$)/;
  return email.match(validate);
};

export default { comparePassword, hashPassword, isValidEmail };
