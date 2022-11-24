/**
 * This interface is empty here, but it will be extended through ambient module declarations.
 */
export interface Index {}

type Keys = keyof Index extends never ? string : keyof Index;

type Suggestions<K> = Index[K];

type IndexAccessor = <K extends Keys>(key: K, other: Index[K]) => void;
