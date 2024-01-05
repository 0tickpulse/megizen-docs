

import React from "react";

export function DetailsTable(details: Record<React.ReactNode, React.ReactNode>) {
    return (
        <div className="entryboxBody">
            <tbody>
                {Object.entries(details).map(([key, value]) => (
                    <tr key={key}>
                        <td>{key}:</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}
