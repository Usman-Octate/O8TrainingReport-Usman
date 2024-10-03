import { faker } from "@faker-js/faker";

faker.seed(124);

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthDate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    age: faker.datatype.number({ max: 200, min: 1 }),
  };
}

export const USERS = Array.from({ length: 200 }, (_, index) => ({
  ...createRandomUser(),
  id: index,
}));
