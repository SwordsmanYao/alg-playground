import LinkedListNode from '../LinkedList/LinkedListNode.ts';
import LinkedList from '../LinkedList/LinkedList.ts';

const node = new LinkedListNode(4);

const list = new LinkedList<number>();

list.prepend(4).prepend(3);

list.delete(x => x === 4);

const deleteNode = list.delete(x => x === 3);
console.log(list.toString(), deleteNode);