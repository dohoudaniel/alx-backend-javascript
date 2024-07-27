// A program that handles standard input and prints it to standard output
// and it ensures child processes while doing so
//
// Writing the message to standard output (the terminal)
process.stdout.write('Welcome to Holberton School, what is your name?\n');
//
// A boolean property checking if the standard input
// is coming from an interactive shell session
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
}
process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
