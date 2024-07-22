import { ColumnMetadata } from "@/metadata/ColumnMetadata"

/**
 * Tree type.
 * Specifies what table pattern will be used for the tree entity.
 */
export interface ClosureTreeOptions {
    closureTableName?: string
    ancestorColumnName?: (column: ColumnMetadata) => string
    descendantColumnName?: (column: ColumnMetadata) => string
}
