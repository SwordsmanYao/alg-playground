class LinkedListNode<T> {
  value: T;
  next?: LinkedListNode<T>;
  constructor(value: T, next?: LinkedListNode<T>) {
    this.value = value;
    this.next = next;
  }
  toString(format?: (value: T) => string) {
    return format ? format(this.value) : String(this.value);
  }
}

export default LinkedListNode;