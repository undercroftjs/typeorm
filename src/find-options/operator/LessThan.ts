import { FindOperator } from "@/find-options/FindOperator"

/**
 * Find Options Operator.
 * Example: { someField: LessThan(10) }
 */
export function LessThan<T>(value: T | FindOperator<T>) {
    return new FindOperator("lessThan", value)
}
