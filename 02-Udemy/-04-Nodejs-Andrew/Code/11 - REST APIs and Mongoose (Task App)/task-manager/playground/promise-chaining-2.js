require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('62df646da1e49df8a3203fef').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('62df646da1e49df8a3203fef')
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
