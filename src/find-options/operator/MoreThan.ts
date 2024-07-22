import { FindOperator } from "@/find-options/FindOperator"

/**
 * Find Options Operator.
 * Example: { someField: MoreThan(10) }
 */
export function MoreThan<T>(value: T | FindOperator<T>) {
    return new FindOperator("moreThan", value)
}
