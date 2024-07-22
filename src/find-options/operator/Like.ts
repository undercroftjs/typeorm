import { FindOperator } from "@/find-options/FindOperator"

/**
 * Find Options Operator.
 * Example: { someField: Like("%some string%") }
 */
export function Like<T>(value: T | FindOperator<T>) {
    return new FindOperator("like", value)
}
