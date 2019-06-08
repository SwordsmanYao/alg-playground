import DoublyLinkedListNode from "./DoublyLinkedListNode.ts";

class DoublyLinkedList<T> {
  /** 头指针 */
  head?: DoublyLinkedListNode<T>;
  /** 尾指针 */
  tail?: DoublyLinkedListNode<T>;
  prepend(value: T) {
    const node = new DoublyLinkedListNode(value, this.head);
    if (this.head) {
      this.head.pre = node;
    }
    this.head = node;
    if (this.tail === undefined) {
      this.tail = node;
    }
    return this;
  }
  append(value: T) {
    const node = new DoublyLinkedListNode(value);
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
      return this;
    }
    node.pre = this.tail;
    this.tail.next = node;
    this.tail = node;
    return this;
  }
  find(cb: (value: T) => boolean): DoublyLinkedListNode<T> | undefined {
    let current = this.head;
    while(current) {
      if (cb(current.value)) {
        return current;
      }
      current = current.next;
    }
    return undefined;
  }
  delete(cb: (value: T) => boolean): DoublyLinkedListNode<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    while(current) {
      if (cb(current.value)) {
        if (current.pre) {
          current.pre.next = current.next;
        } else {
          this.head = current.next;
        }
        if (current.next) {
          current.next.pre = current.pre;
        } else {
          this.tail === current.pre;
        }
        return current;
      }
      current = current.next;
    }
  }

  toString(nodeFormat?: (value) => string) {
    let current = this.head;
    let str = '';
    while(current) {
      str += current.toString(nodeFormat) + ',';
      current = current.next;
    }
    return str;
  }
}

export default DoublyLinkedList;