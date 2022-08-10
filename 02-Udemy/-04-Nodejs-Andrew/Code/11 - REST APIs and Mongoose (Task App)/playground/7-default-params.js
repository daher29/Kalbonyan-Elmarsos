const greeter = (name = 'user', age = 29) => {
  console.log('Hello ' + name + ' with ' + age + ' years.');
};

greeter('Moh', 33);

greeter();
