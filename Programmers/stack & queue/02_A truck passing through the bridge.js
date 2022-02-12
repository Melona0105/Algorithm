function solution(bridge_length, weight, truck_weights) {
  let count = 1;
  let bridge = new Array(bridge_length).fill(0); // [0, 0]
  let totalWeight = truck_weights.shift();
  bridge.push(totalWeight);
  bridge.shift();

  while (totalWeight > 0) {
    totalWeight = totalWeight - bridge.shift();
    const now = truck_weights.shift();
    if (totalWeight + now <= weight) {
      bridge.push(now);
      totalWeight = totalWeight + now;
    } else {
      bridge.push(0);
      truck_weights.unshift(now);
    }
    count++;
  }
  return count;
}
