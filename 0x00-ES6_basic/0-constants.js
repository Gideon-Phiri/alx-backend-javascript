// taskFirst function using const
export function taskFirst() {
  const task = "I prefer const when I can.";
  return task;
}

// getLast function remains the same
export function getLast() {
  return " is okay";
}

// taskNext function using let
export function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
