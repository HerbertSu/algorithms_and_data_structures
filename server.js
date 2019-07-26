const {
    QuickFind,
    QuickUnion
    } = require('./algorithms/DynamicConnectivity');

const { 
    BinarySearchArray,
    } = require('./algorithms/Search');

const {
    solveTwoSum,
    solveThreeSum,
} = require('./algorithms/NSum');

const { 
    SelectionSort,
    InsertionSort,
    ShellSort,
    MergeSort,
    QuickSort,
    QuickSelect,
    max,
} = require('./algorithms/Sort');

const { 
    knuthShuffle,
} = require('./algorithms/Shuffle');

const {StackLinkedList} = require('./data_structures/Stack');
const {QueueLinkedList} = require('./data_structures/Queue');
const {Bag} = require('./data_structures/Bag');
const {
    MaxHeap,
    MinHeap,
    MinHeapMST,
} = require('./data_structures/Heap');
const {
    OrderedSymbolTable,
    BinarySearchTree,
    RedBlackBST,
} = require('./data_structures/SymbolTable');
const {
    SeparateChainingHashTable,
    LinearProbingHashTable,
} = require('./data_structures/HashTable');

const {Graph} = require('./data_structures/Graph');
const {DepthFirstSearch} = require('./algorithms/DepthFirstSearch');
const {BreadthFirstSearch} = require('./algorithms/BreadthFirstSearch');
const {ComponentConnectivity} = require('./data_structures/GraphAPIs');
const {Digraph} = require('./data_structures/Digraph');
const {
    TopologicalSort,
    KosarajuShairSCC,
} = require('./data_structures/DigraphAPIs');

const {
    Edge,
    EdgeWeightedGraph
} = require('./data_structures/MinimumSpanningTree');
const {
    KruskalMST
} = require('./algorithms/KruskalsMST');
const {
    LazyPrimMST,
} = require('./algorithms/PrimsMST');

const {
    EdgeWeightedDigraph,
    DirectedEdge,
    SPT,
} = require('./data_structures/EdgeWeightedDigraph');
const {IndexMinPQ} = require('./data_structures/IndexedPriorityQueue');
const {DijkstraSP} = require('./algorithms/DijkstraSP');

let arrayA = [100, 32, 65, -10 ,7, 324, 74, 4, 3, 2];
let arrayB = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let arrayBVals = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let ss_str = "SHELLSORTEXAMPLE";
let array_ss_Str = ss_str.split('');
let ms_str = "MERGESORTEXAMPLE";
let array_ms_str = ms_str.split("");
let qs_str = "QUICKSORTEXAMPLE";
let array_qs_str = qs_str.split("");
let example = "SORTEXAMPLE";
let example_str = example.split("");
example_str.unshift(null);

let ost = new OrderedSymbolTable(arrayB, arrayBVals);
let bst = new BinarySearchTree;
let rbBst = new RedBlackBST;

let scht = new SeparateChainingHashTable(4);
let lpht = new LinearProbingHashTable(20);

let graph = new Graph(13);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 6);
graph.addEdge(0, 5);
graph.addEdge(5, 3);
graph.addEdge(5, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 6);
graph.addEdge(7, 8);
graph.addEdge(9, 10);
graph.addEdge(9, 11);
graph.addEdge(9, 12);
graph.addEdge(11, 12);
graph.addEdge(10, 12);

let digraph = new Digraph(13);
digraph.addEdge(0, 1);
digraph.addEdge(0, 5);
digraph.addEdge(2, 0);
digraph.addEdge(2, 3);
digraph.addEdge(3, 2);
digraph.addEdge(3, 5);
digraph.addEdge(4, 2);
digraph.addEdge(4, 3);
digraph.addEdge(5, 4);
digraph.addEdge(6, 0);
digraph.addEdge(6, 4);
digraph.addEdge(6, 8);
digraph.addEdge(6, 9);
digraph.addEdge(7, 6);
digraph.addEdge(7, 9);
digraph.addEdge(8, 6);
digraph.addEdge(9, 10);
digraph.addEdge(10, 2);
digraph.addEdge(11, 9);
digraph.addEdge(11, 4);
digraph.addEdge(12, 9);

let digraphTopological = new Digraph(7);
digraphTopological.addEdge(0, 1);
digraphTopological.addEdge(0, 5);
digraphTopological.addEdge(0, 2);
digraphTopological.addEdge(1, 4);
digraphTopological.addEdge(3, 2);
digraphTopological.addEdge(3, 5);
digraphTopological.addEdge(3, 4);
digraphTopological.addEdge(3, 6);
digraphTopological.addEdge(5, 2);
digraphTopological.addEdge(6, 0);
digraphTopological.addEdge(6, 4);

let digraphTopologicalSCC = new Digraph(13);
digraphTopologicalSCC.addEdge(0, 1);
digraphTopologicalSCC.addEdge(0, 5);
digraphTopologicalSCC.addEdge(2, 0);
digraphTopologicalSCC.addEdge(2, 3);
digraphTopologicalSCC.addEdge(3, 2);
digraphTopologicalSCC.addEdge(3, 5);
digraphTopologicalSCC.addEdge(4, 2);
digraphTopologicalSCC.addEdge(4, 3);
digraphTopologicalSCC.addEdge(5, 4);
digraphTopologicalSCC.addEdge(6, 0);
digraphTopologicalSCC.addEdge(6, 4);
digraphTopologicalSCC.addEdge(6, 8);
digraphTopologicalSCC.addEdge(6, 9);
digraphTopologicalSCC.addEdge(7, 6);
digraphTopologicalSCC.addEdge(7, 9);
digraphTopologicalSCC.addEdge(8, 6);
digraphTopologicalSCC.addEdge(9, 10);
digraphTopologicalSCC.addEdge(9, 11);
digraphTopologicalSCC.addEdge(10, 12);
digraphTopologicalSCC.addEdge(11, 4);
digraphTopologicalSCC.addEdge(11, 12);
digraphTopologicalSCC.addEdge(12, 9);

let dfs = new DepthFirstSearch(graph, 0);
let bfs = new BreadthFirstSearch(graph, 0);
let cc = new ComponentConnectivity(graph);

let digraphDfs = new DepthFirstSearch(digraph, 0);
let digraphBfs = new BreadthFirstSearch(digraph, 0);
let digraphTopSort = new TopologicalSort(digraphTopological);
let scc = new KosarajuShairSCC(digraphTopologicalSCC)

let minPQ = new MinHeap([null]);
let maxPQ = new MaxHeap([null]);

let weightedG = new EdgeWeightedGraph(8);

let e0_6 = new Edge(0, 6, 0.58);
let e0_2 = new Edge(0, 2, 0.26);
let e0_4 = new Edge(0, 4, 0.38);
let e0_7 = new Edge(0, 7, 0.16);
let e1_3 = new Edge(1, 3, 0.29);
let e1_2 = new Edge(1, 2, 0.36);
let e1_7 = new Edge(1, 7, 0.19);
let e1_5 = new Edge(1, 5, 0.32);
let e2_3 = new Edge(2, 3, 0.17);
let e2_6 = new Edge(2, 6, 0.40);
let e2_7 = new Edge(2, 7, 0.34);
let e3_6 = new Edge(3, 6, 0.52);
let e4_6 = new Edge(4, 6, 0.93);
let e4_7 = new Edge(4, 7, 0.37);
let e4_5 = new Edge(4, 5, 0.35);
let e5_7 = new Edge(5, 7, 0.28);


weightedG.addEdge(e0_6);
weightedG.addEdge(e0_2);
weightedG.addEdge(e0_4);
weightedG.addEdge(e0_7);
weightedG.addEdge(e1_3);
weightedG.addEdge(e1_2);
weightedG.addEdge(e1_7);
weightedG.addEdge(e1_5);
weightedG.addEdge(e2_3);
weightedG.addEdge(e2_6);
weightedG.addEdge(e2_7);
weightedG.addEdge(e3_6);
weightedG.addEdge(e4_6);
weightedG.addEdge(e4_7);
weightedG.addEdge(e4_5);
weightedG.addEdge(e5_7);

// let kruskal = new KruskalMST(weightedG)
// let nodes = kruskal.edges().count;
// while(nodes > 0){
//     console.log(kruskal.edges().remove().key)
//     nodes--;
// };

// let lazyPrim = new LazyPrimMST(weightedG);
// let lazy = lazyPrim.returnMST().count;
// while(lazy > 0){
//     console.log("---",lazyPrim.returnMST().remove().key)
//     lazy--;
// };

let size = 8;
let ewd = new EdgeWeightedDigraph(size);

let de0_1 = new DirectedEdge(0, 1, 5);
let de0_4 = new DirectedEdge(0, 4, 9);
let de0_7 = new DirectedEdge(0, 7, 8);
let de1_2 = new DirectedEdge(1, 2, 12);
let de1_3 = new DirectedEdge(1, 3, 15);
let de1_7 = new DirectedEdge(1, 7, 4);
let de2_3 = new DirectedEdge(2, 3, 3);
let de2_6 = new DirectedEdge(2, 6, 11);
let de3_6 = new DirectedEdge(3, 6, 9);
let de4_5 = new DirectedEdge(4, 5, 4);
let de4_6 = new DirectedEdge(4, 6, 20);
let de4_7 = new DirectedEdge(4, 7, 5);
let de5_2 = new DirectedEdge(5, 2, 1);
let de5_6 = new DirectedEdge(5, 6, 13);
let de7_5 = new DirectedEdge(7, 5, 6);
let de7_2 = new DirectedEdge(7, 2, 7);

ewd.addEdge(de0_1);
ewd.addEdge(de0_4);
ewd.addEdge(de0_7);
ewd.addEdge(de1_2);
ewd.addEdge(de1_3);
ewd.addEdge(de1_7);
ewd.addEdge(de2_3);
ewd.addEdge(de2_6);
ewd.addEdge(de3_6);
ewd.addEdge(de4_5);
ewd.addEdge(de4_6);
ewd.addEdge(de4_7);
ewd.addEdge(de5_2);
ewd.addEdge(de5_6);
ewd.addEdge(de7_5);
ewd.addEdge(de7_2);

let shortestPath = new DijkstraSP(ewd, 0);
let qsort = new QuickSort(['e','d','f', 'g']);


let iminpq = new IndexMinPQ(10);

iminpq.insert(0, 10);
iminpq.insert(1, 11);
iminpq.insert(2, 14);
iminpq.insert(3, 9);
iminpq.insert(5, 6);

let qsort2 = new QuickSelect(arrayA);
// qsort2.sort()
// console.log(qsort2.select(arrayA, 1))