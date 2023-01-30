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

    findFirst(value) {
        let ptr = this.head;
        while (ptr.next != null) {
            if (ptr.value == value) {
                return ptr;
            }
            ptr = ptr.next;
        };
        return null;
    };

    toString() {
        if (this.head == null) {
            return "null";
        } else {
            let outputString = "(";
            let ptr = this.head;
            while (ptr != null) {
                outputString = outputString + ptr.value + ") -> (";
                ptr = ptr.next;
            };
            outputString = outputString.slice(0, -1) + "null";
            console.log(outputString);
        }
    };

    insertAt(value, index) {
        let newNode = new Node();
        newNode.value = value;
        let counter = 0;
        let previous = null;
        let ptr = this.head;
        while ((counter != index) && (ptr.next != null)) {
            counter++;
            previous = ptr;
            ptr = ptr.next;
        };
        if ((counter == index - 1) && (ptr.next == null)) {
            ptr.next = newNode;
        } else if ((counter == index) && (previous == null)) {
            newNode.next = this.head;
            this.head = newNode;
        } else if (counter == index) {
            previous.next = newNode;
            newNode.next = ptr;
        };
    };

    removeAt(index) {
        let counter = 0;
        let previous = null;
        let ptr = this.head;
        while ((counter != index) && (ptr.next != null)) {
            counter++;
            previous = ptr;
            ptr = ptr.next;
        };
        if ((counter == index) && (previous == null)) {
            this.head = ptr.next;
        } else if (counter == index) {
            previous.next = ptr.next;
        };
    }

};