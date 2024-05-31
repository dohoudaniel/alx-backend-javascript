export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = this.task;
    task2 = this.task2;
  }

  return [task, task2];
}
