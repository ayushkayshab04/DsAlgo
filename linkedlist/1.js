
class node{
    constructor(value){
        this.value =value
        this.next = null
        // this.prev =null
    }
}
class linkedList {
    constructor(value){
        this.head = {
            value:value,
            next:null
        }

        this.tail = this.head;
        this.length=1;
    }
    append(value){
        const newNode = new node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this;
    }
    prepend(value){
        const newNode = new node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    printList(){
        const array = []
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array
    }
    insert(index,value){
       if(index>= this.length){
        return this.append(value)
       }
       if (index === 0) {
        this.prepend(value);
        return this.printList(); 
        }
        const newNode = new node(value)
        const leader = this.traverseToIndex(index-1)
        let temp; 
        temp = leader.next
        leader.next = newNode
        newNode.next = temp
        this.length++
    }

    remove(index){
        if(index>= this.length){
            const leader = this.traverseToIndex(index-1)
            leader.next = null
            this.length--
        }
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--

    }

    traverseToIndex(index){
        if(index>this.length){
            return;
        }
        let counter = 0;
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    reverse(){
       if(this.length == 1){
        return this.head
       }
       let first = this.head;
       this.tail = this.head
       let second = first.next
       while(second){
        const temp = second.next
        second.next=first
        first=second
        second = temp
        }
        this.head.next = null
        this.head = first
        return this;
    }

}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value:value,
            next:null,
            prev:null
        }

        this.tail = this.head;
        this.length=1;
    }
    append(value){
        const newNode = new node(value)
        newNode.prev= this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this;
    }
    prepend(value){
        const newNode = new node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
    }
    printList(){
        const array = []
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array
    }
    insert(index,value){
       if(index>= this.length){
        return this.append(value)
       }
       if (index === 0) {
        this.prepend(value); 
        return this.printList(); 
        }
        const newNode = new node(value)
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        leader.next = newNode
        newNode.prev = leader
        newNode.next = follower
        follower.prev = newNode
        this.length++
    }

    remove(index){
        if(index>= this.length){
            const leader = this.traverseToIndex(index-1)
            leader.next = null
            this.length--
        }
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next
        const follower = unwantedNode.next
        follower.prev = leader
        leader.next = unwantedNode.next
        this.length--

    }
    //5-->10-->15
    traverseToIndex(index){
        if(index>this.length){
            return;
        }
        let counter = 0;
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

}


const myLinkedList = new linkedList(10)
myLinkedList.append(5)
myLinkedList.prepend(2)
myLinkedList.append(16)
// myLinkedList.remove(1)
// myLinkedList.insert(80,90)
// console.log(myLinkedList.printList())
console.log(myLinkedList.printList())
console.log(JSON.stringify(myLinkedList.reverse(),null,4))
console.log(myLinkedList.printList())


// if (index === 0) {
//     this.prepend(value);
//     return this.printList();
//   }