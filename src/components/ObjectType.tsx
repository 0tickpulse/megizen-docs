import type { ObjectType } from "@site/src/types/objectType";
import { urlObjectType } from "@site/src/utils/urls";

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
                <tr>
                    <td colSpan={2}>
                        <a href={urlObjectType(name)}>View source</a>
                    </td>
                </tr>
            </tbody>
        </>
    );
}
