export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const calledFunction = mathFunction();
    queue.push(calledFunction);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processes');
  }
  return queue;
}
