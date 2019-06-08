class DoublyLinkedListNode<T> {
  value: T;
  next?: DoublyLinkedListNode<T>;
  pre?: DoublyLinkedListNode<T>;
  constructor(value: T, next?: DoublyLinkedListNode<T>, pre?: DoublyLinkedListNode<T>) {
    this.value = value;
    this.next = next;
    this.pre = pre;
  }
  toString(format?: (value: T) => string) {
    return format ? format(this.value) : String(this.value);
  }
}

export default DoublyLinkedListNode;