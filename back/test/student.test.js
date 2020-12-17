const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const { setUpDatabase } = require('./fixtures/db');
beforeEach(setUpDatabase);



describe('Should signup a new user', () => {

  
test('Create user and send code 201', async () => {
  await request(app)
    .post('/api/student/create')
    .send({
      firstName: 'Ibra',
      lastName:'Niass',
      email: 'ibra@example1.com',
      password: 'MyPassTest1',
      phoneNumber:'00758325825'
    })
    .expect(201);

});

test('Can find created user in database', async () => {
  const response = await request(app)
    .post('/api/student/create')
    .send({
      firstName: 'Ibra',
      lastName:'Niass',
      email: 'ibra@example1.com',
      password: 'MyPassTest1',
      phoneNumber:'00758325825'
    })

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

});

test('Data send back to front is correct', async () => {
  const response = await request(app)
    .post('/api/student/create')
    .send({
      firstName: 'Ibra',
      lastName:'Niass',
      email: 'ibra@example1.com',
      password: 'MyPassTest1',
      phoneNumber:'00758325825'
    })
    const user = await User.findById(response.body.user._id);

  // // Assertion about the response
  expect(response.body).toMatchObject({
    user: {
      firstName: 'Ibra',
      lastName:'Niass',
      email: 'ibra@example1.com',
      phoneNumber:'00758325825'
    },
    token: user.tokens[0].token
  });
});

test('Password hash', async () => {
  const response = await request(app)
    .post('/api/student/create')
    .send({
      firstName: 'Ibra',
      lastName:'Niass',
      email: 'ibra@example1.com',
      password: 'MyPassTest1',
      phoneNumber:'00758325825'
    })

    // const users = await User.find({});
    // console.log({users})
    const user = await User.findById(response.body.user._id);

  expect(user.password).not.toBe('MyPassTest1');
});



});
