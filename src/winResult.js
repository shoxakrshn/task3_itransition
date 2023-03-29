export const winResult = (cpuChoice, rest) => {
  const halfCircle = Math.floor(rest.length / 2);
  const result = [];

  
  for (let i = cpuChoice + 1; i <= cpuChoice + halfCircle; i += 1) {
    if (rest[i] === undefined) {
        const idx = Math.abs(rest.length - i);
        result.push(rest[idx]);
        continue;
    }
    
    result.push(rest[i])
  }

  return result;
}