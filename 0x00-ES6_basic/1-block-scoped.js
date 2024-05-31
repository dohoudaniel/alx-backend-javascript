export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = this.task;
    var task2 = this.task2;
  }

  return [task, task2];
}
