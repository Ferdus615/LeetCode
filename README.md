Time and Space Complexities are fundamental concepts in computer science used to measure the **performance and resource usage** of an algorithm.

---

## 1. What Do Time & Space Complexities Mean? 

### Time Complexity
Time complexity measures the _amount of time_ an **algorithm [independent of any specific code or programming language]** takes to run as a function of the length of the input _(N)_ as it grows. 
Crucially, it doesn't measure time in seconds, but in terms of the **number of elementary operations** (like comparisons, assignments, or arithmetic calculations) the algorithm performs.

### Space Complexity
Space complexity measures the **amount of memory** or storage space an **algorithm [independent of any specific code or programming language]** needs to run as a function of the length of the input _(N)_ as it grows. 
This typically includes the space required to store the input itself and any **auxiliary space** (extra memory used by the algorithm, like temporary variables, stacks, or dynamic arrays).

Both are expressed using **Big O notation** (O(...)), which focuses on the **worst-case scenario** and the **growth rate** of the resource usage.

* _Note: By convention, Big O describes the worst-case growth rate of an algorithm._

---
## 2. How to Calculate Time Complexity (Big O Notation)

**We will analyze this function:**

Let the array size = **N**.

```js
function processArray(arr) {
  let sum = 0;           // Step A: simple statement
  let count = 5;         // Step A: simple statement

  // Step B: Single loop
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];       // constant-time operation
  }

  // Step C: Final constant-time operations
  let avg = sum / arr.length;
  return avg;
}
```
---

### **Step 1: Count Elementary Operations**

#### **A. Simple statements (O(1))**

```js
let sum = 0     → 1 operation
let count = 5   → 1 operation
```

Total = **2 operations**


#### **B. The loop (runs N times)**

Inside the loop:

* Comparison (`i < arr.length`) → 1 op
* Increment (`i++`) → 1 op
* Addition `sum += arr[i]` → 1 op

Assume **3 operations per iteration**.

Total = **3N**


#### **C. Final constant statements (O(1))**

```js
avg = sum / N    → 1 op
return avg       → 1 op
```

Total = **2 operations**

---

### **Step 2: Build the Time Function _T(N)_**

$$T(N) = \underbrace{2}_{\text{Setup}} + \underbrace{3N}_{\text{Loop}} + \underbrace{2}_{\text{Final Ops}}$$

$$T(N) = 3N + 4$$

---

### **Step 3: Apply Big O Rules**

#### 1. Drop lower-order terms

`4` grows much slower than `3N`.

$$T(N) \approx 3N$$

#### 2. Drop constant coefficients

The “3” in `3N` doesn’t matter in asymptotic growth.


$$T(N) = O(N)$$

---

### **Final Answer**

$$\boxed{O(N)}$$

---

### Here is a Slightly Better Example

```js
function example(arr) {
  // O(1)
  let x = 10;

  // O(N)
  for (let i = 0; i < arr.length; i++) {
    x += arr[i];
  }

  // O(N^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j);
    }
  }
}
```

Time function:

$$T(N) = 1 + N + N^2$$

Dominant term: (N^2)

Final complexity:

$$\boxed{O(N^2)}$$

---




## 3. What Complexity Tells Us 🗣️

Complexity tells us **how the algorithm's performance scales** with an increasing input size, which is critical for predicting behavior when dealing with large datasets.

#### A. Predictability
It allows a developer to **predict** how much slower an algorithm will get if the input size is doubled, tripled, or grows to a million.

| Complexity | Growth Description | Effect of Doubling $N$ | Example |
| :--- | :--- | :--- | :--- |
| **$O(1)$** | **Constant** | Time remains the same. | Array lookup by index. |
| **$O(\log N)$** | **Logarithmic** | Time increases by a small, constant amount. | Binary Search. |
| **$O(N)$** | **Linear** | Time roughly doubles. | Simple loop through an array. |
| **$O(N^2)$** | **Quadratic** | Time quadruples ($2^2$). | Nested loops, simple selection sort. |
| **$O(2^N)$** | **Exponential** | Time doubles for every single item added. | Brute-force Fibonacci or traveling salesman problem. |

#### B. Comparability
It allows two algorithms designed to solve the same problem (e.g., two different sorting algorithms) to be objectively compared based on their long-term efficiency, regardless of the hardware they are run on.

---

## 4. Why the Constants Don't Matter 🚫

Constants (like the '2' in $2N$ or the '5' in $5N^2$) are dropped in Big O calculation for three main reasons:

### A. Focus on Scaling (Asymptotic Growth)
The core goal of Big O is to analyze the algorithm's performance as the input size $N$ approaches **infinity** ($\mathbf{N \to \infty}$). At extremely large values of $N$, the function's overall shape and trajectory are dictated entirely by the **highest-order term** (e.g., $N^2$ dominates $N$), making the constant factors insignificant by comparison.

### B. Machine Independence
Constants are often influenced by non-algorithmic factors:
* **Hardware Speed:** A fast CPU will execute $5N$ operations quicker than a slow CPU executes $2N$ operations.
* **Compiler/Language Efficiency:** Different languages or compilers may take a different number of machine instructions to perform a single elementary operation.

By dropping the constants, Big O provides a **machine-independent metric** that describes the inherent complexity of the algorithm's logic.

### C. Mathematical Simplification (Limit Definition)
Mathematically, Big O is defined using limits, where constants naturally disappear. When we say $T(N) = 2N + 5$ is $O(N)$, we are saying that for large $N$, $T(N)$ is **bounded** by some constant multiple of $N$. The exact constant is irrelevant for defining the upper bound of the growth class.
