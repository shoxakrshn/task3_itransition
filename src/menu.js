export const menu = (choices) => {
  console.log('Available moves:');
  choices.forEach((item, i) => {
    console.log(`[${i + 1}] - ${item}`);
  });
  console.log('[?] - help\n[0] - exit\n');
};