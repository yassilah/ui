export type DevtoolsMeta<T> = {
  defaultProps?: T
  example?: string
}

export function extendComponentMeta<T>(_meta: DevtoolsMeta<T>) { }
