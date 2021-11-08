/**
 * A referenceResolver is a function accepting a patrial type stub;l from another graphQL instance or subgraph.
 * ```ts
 * @referenceResolver
 * async resolveReference(reference: Partial<T>) {
 *  this.model.findById(reference.id)
 * }
 * ```
 */