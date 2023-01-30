class Node {
    constructor() {
        this.value = null;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
    };

    append(value) {
        let newNode = new Node();
        newNode.value = value;
        let previous = null;
        let ptr = this.head;
        if ((previous == null) && (ptr == null)) {
            this.head = newNode;
        } else {
            while (ptr != null) {
                previous = ptr;
                ptr = ptr.next;
            };
            previous.next = newNode;
        };
    };

    prepend(value) {
        let newNode = new Node();
        newNode.value = value;
        newNode.next = this.head;
        this.head = newNode;
    };

    size() {
        // return total number of nodes in the list

    };

    head() {
        // return head node

    };

    tail() {
        // return tail node

    };

    at(index) {
        // return node at index

    };

    pop() {
        // remove last element

    };

    contains(value) {
        // return true if value is in list; else false

    };

    find(value) {
        // return index of node containing value; else null
    };

    toString() {
        // console.log list as string: e.g., ( value ) -> ( value ) -> ( value ) -> null
    };

    insertAt(value, index) {
        // insert a new node with the provided value at the given index
    };

    removeAt(index) {
        // remove node at given index
    }

};

theList = new LinkedList();
theList.append(30);
theList.append(40);
theList.append(50);
theList.prepend(20);
console.log(theList.head);
console.log(theList.head.next);
console.log(theList.head.next.next);
console.log(theList.head.next.next.next);