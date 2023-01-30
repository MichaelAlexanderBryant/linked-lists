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
        let count = 0;
        let ptr = this.head;
        while (ptr != null) {
            count++;
            ptr = ptr.next;
        };
        return count;
    };

    returnHead() {
        return this.head;

    };

    returnTail() {
        let ptr = this.head;
        if (ptr == null) {
            return null;
        } else {
            while (ptr.next != null) {
                ptr = ptr.next;
            };
            return ptr;
        };

    };

    at(index) {
        let ptr = this.head;
        let counter = 0
        while ((counter != index) && (ptr != null)) {
            counter++;
            ptr = ptr.next;
        };
        return ptr;
    };

    pop() {
        let ptr = this.head;
        if (ptr == null) {
            return;
        } else {
            let previous = null;
            while (ptr.next != null) {
                previous = ptr;
                ptr = ptr.next
            };
            if (previous == null) {
                this.head = null;
            } else {
                previous.next = null;
            };
        };

    };

    contains(value) {
       let ptr = this.head;
       while (ptr != null) {
        if (ptr.value == value) {
            return true;
        }
        ptr = ptr.next;
       };
       return false;
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
console.log(theList.size())
theList.pop();
console.log(theList.returnTail())
theList.append(30);
theList.append(40);
theList.append(50);
theList.prepend(20);
console.log(theList.size())
console.log(theList.head);
console.log(theList.head.next);
console.log(theList.head.next.next);
console.log(theList.head.next.next.next);
console.log(theList.returnHead())
console.log(theList.returnTail())
console.log(theList.at(0))
console.log(theList.at(3))
console.log(theList.returnTail())
theList.pop();
console.log(theList.returnTail())
console.log(theList.contains(30));
console.log(theList.contains(10));
