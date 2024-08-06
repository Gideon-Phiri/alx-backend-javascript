export function taskFirst() {
  // Uses const
  const task = "I prefer const when I can.";
  return task;
}

export function getLast() {
  return " is okay";
}

export function taskNext() {
  // Uses let
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
