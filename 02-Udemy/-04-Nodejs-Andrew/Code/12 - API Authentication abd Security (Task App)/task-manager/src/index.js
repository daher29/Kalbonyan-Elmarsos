const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  const task = await Task.findById('62f00a687ab9f0f2112cf629');
  await task.populate('owner');
  console.log(task.owner);

  const user = await User.findById('62efeb8fb1de0ac2c2a2618f');
  await user.populate('tasks');
  console.log(user.tasks);
};

main();

// NOTE: be aware of task and user's IDs if changed would gives an error
