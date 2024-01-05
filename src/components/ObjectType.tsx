import { EntryBox } from "@site/src/components/EntryBox";
import { MetaEntry } from "@site/src/components/MetaEntry";
import type { ObjectType } from "@site/src/types/objectType.js";

export function ObjectType({ name, prefix, baseType, implementations, identityFormat, description }: ObjectType) {
    return (
        <>
            <tbody>
                {prefix && (
                    <tr>
                        <td>Prefix:</td>
                        <td>
                            <code>{prefix}</code>
                        </td>
                    </tr>
                )}
                {baseType && (
                    <tr>
                        <td>Base Type:</td>
                        <td>{baseType}</td>
                    </tr>
                )}
                {identityFormat && (
                    <tr>
                        <td>Identity Format:</td>
                        <td>{identityFormat}</td>
                    </tr>
                )}
                {implementations && (
                    <tr>
                        <td>Implementations:</td>
                        <td>{implementations.join(", ")}</td>
                    </tr>
                )}
                {description && (
                    <tr>
                        <td>Description:</td>
                        <td>{description}</td>
                    </tr>
                )}
            </tbody>
        </>
    );
}
