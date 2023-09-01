// Min-heap implementation using an array
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // ... MinHeap methods (insert, extractMin, isEmpty, bubbleUp, sinkDown) ...

}

function findMinimumCostRopes(ropes) {
  // Initialize a min-heap
  const minHeap = new MinHeap();

  // Insert all the ropes into the min-heap
  for (const rope of ropes) {
    minHeap.insert(rope);
  }

  let totalCost = 0;

  // Merge ropes until there's only one left in the heap
  while (!minHeap.isEmpty() && minHeap.heap.length > 1) {
    const rope1 = minHeap.extractMin();
    const rope2 = minHeap.extractMin();
    const newRope = rope1 + rope2;
    totalCost += newRope;
    minHeap.insert(newRope);
  }

  return totalCost;
}

// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ropeForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("ropeInput").value;
    const ropes = input.split(",").map((str) => parseInt(str.trim(), 10));
    const minimumCost = findMinimumCostRopes(ropes);
    resultDiv.textContent = `Minimum Cost: ${minimumCost}`;
  });
});
