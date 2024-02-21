"use client"
import React from "react";
import $ from "jquery";
import "datatables.net";
import "./datatable.css";

export default function DataTable({ title, columns, rows, actionComponent }: { title?: string, columns?: any[], rows?: any[], actionComponent?: React.ReactNode }) {
    React.useEffect(() => {
        $(document).ready(function () {
            ($("#example") as any).DataTable({
                // You can pass any options you want here
            });
        });

        // Cleanup function
        return () => {
            // Destroy the DataTable instance to prevent memory leaks
            ($("#example") as any).DataTable().destroy();
        };
    }, []);
    return (
        <>
            <div className="container bg-white rounded-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-row justify-between items-center ">
                    <h1 className="text-2xl font-bold mb-4">{title}</h1>
                    {actionComponent && (
                        <React.Fragment>
                            {(actionComponent)}
                        </React.Fragment>
                    )}
                </div>
                <table id="example" className="table-auto w-full">
                    <thead>
                        <tr>
                            {
                                columns?.map((column, index) => (
                                    <th key={index} className="px-4 py-2">{column.label}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows?.map((row, index) => (
                                <tr key={index}>
                                    {
                                        row.map((cell: any, index: any) => (
                                            <td key={index} className="border px-4 py-2">{cell}</td>
                                        ),)
                                    }
                                </tr>
                            ))
                        }
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

        </>
    );
}