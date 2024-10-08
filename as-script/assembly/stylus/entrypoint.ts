import { getInput, sendOutput } from '.';
export { mark_used } from '.'; // Required by Stylus
import { main } from '../app';

// Stylus entrypoint
export function user_entrypoint(len: i32): i32 {
  const input = getInput(len);
  if (!input) {
    return 1;
  }

  // Calling the app
  const output = main(input);

  sendOutput(output);
  return 0;
}