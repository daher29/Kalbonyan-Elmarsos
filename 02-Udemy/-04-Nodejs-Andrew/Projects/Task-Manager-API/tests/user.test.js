const request = require('supertest');
const app = require('../src/app');

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Moo',
      email: 'mohaaa@mail.com',
      password: 'Green12333!',
    })
    .expect(201);
});
