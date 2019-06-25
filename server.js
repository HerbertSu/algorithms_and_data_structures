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

} = require('./algorithms/Sort');

const { 
    knuthShuffle,
} = require('./algorithms/Shuffle');

const {StackLinkedList} = require('./data_structures/Stack');
const {QueueLinkedList} = require('./data_structures/Queue');
const {Bag} = require('./data_structures/Bag');
const {Heap} = require('./data_structures/Heap');
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

