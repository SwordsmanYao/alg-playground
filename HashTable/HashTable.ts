import LinkedList from "../LinkedList/LinkedList.ts";

export interface INodeValue<T> {
  key: string;
  value: T;
}

class HashTable<T> {
  buckets: LinkedList<INodeValue<T>>[];
  keyHashMap: {
    [key: string]: number;
  };

  constructor(bucketsLength: number = 30) {
    this.buckets = Array(bucketsLength).fill(null).map(() => new LinkedList());
    this.keyHashMap = {};
  }

  hash(key: string) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );
    return hash % this.buckets.length;
  }

  set(key: string, value: T) {
    const hash = this.hash(key);
    this.keyHashMap[key] = hash;
    const bucketLinkedList = this.buckets[hash];
    const node = bucketLinkedList.find(x => x.key === key);
    if (node) {
      node.value.value = value;
    } else {
      bucketLinkedList.append({ key, value });
    }
  }

  delete(key: string) {
    const hash = this.keyHashMap[key];
    if (hash !== undefined) {
      const bucketLinkedList = this.buckets[hash];
      delete this.keyHashMap[key];
      return bucketLinkedList.delete(x => x.key === key);
    }
    return undefined;
  }

  get(key: string) {
    const hash = this.keyHashMap[key];
    if (hash !== undefined) {
      const bucketLinkedList = this.buckets[hash];
      return bucketLinkedList.find(x => x.key === key);
    }
    return undefined;
  }

  has(key: string) {
    return this.keyHashMap[key] !== undefined;
  }

  getKeys() {
    return Object.keys(this.keyHashMap);
  }
}

export default HashTable;