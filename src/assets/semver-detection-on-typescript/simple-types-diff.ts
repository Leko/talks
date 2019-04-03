enum NodeType {
  HOGE
}

type Foo<T> = T;

type Node = {
  type: NodeType;
  prop: 1 | Foo<2> | 3;
};
