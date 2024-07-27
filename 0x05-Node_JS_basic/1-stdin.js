// A program that handles standard input and prints it to standard output
// and it ensures child processes while doing so
//
// Writing the message to standard output (the terminal)
process.stdout.write('Welcome to Holberton School, what is your name?\n');
//
// A boolean property checking if the standard input
// is coming from an interactive shell session
if (process.stdin.isTTY) {
  // Convert the input buffer to a string and
  // writes the input back to the terminal
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  // Handling an event whereby the input is not
  // coming from a terminal
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  // What the 'exit' function does when it is called
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
