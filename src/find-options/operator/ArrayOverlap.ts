import { FindOperator } from "@/find-options/FindOperator"

/**
 * FindOptions Operator.
 * Example: { someField: ArrayOverlap([...]) }
 */
export function ArrayOverlap<T>(
    value: readonly T[] | FindOperator<T>,
): FindOperator<any> {
    return new FindOperator("arrayOverlap", value as any)
}
