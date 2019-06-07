import LinkedListNode from "./LinkedListNode.ts";

class LinkedList<T> {
  /** 头指针 */
  head?: LinkedListNode<T>;
  /** 尾指针 */
  tail?: LinkedListNode<T>;
  prepend(value: T) {
    const node = new LinkedListNode(value, this.head);
    this.head = node;
    if (this.tail === undefined) {
      this.tail = node;
    }
    Deno.read
    return this;
  }
  append(value: T) {
    const node = new LinkedListNode(value);
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }
  find(value: T): LinkedListNode<T> | undefined {
    let current = this.head;
    while(current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return undefined;
  }
  delete(value: T): LinkedListNode<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    let pre: LinkedListNode<T> | undefined = undefined;
    let current = this.head;
    while(current) {
      if (current.value === value) {
        if (pre) {
          pre.next = current.next;
        } else {
          this.head = current.next;
        }
        if (this.tail === current) {
          this.tail === pre;
        }
        return current;
      }
      pre = current;
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

export default LinkedList;