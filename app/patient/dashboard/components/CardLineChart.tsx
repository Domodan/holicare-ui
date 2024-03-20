
import React from "react";
import CanvasComponent from "@/components/Canvas/CanvasComponent";

export default function CardLineChart() {
    const config = {
        type: "line",
        data: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
            ],
            datasets: [
                {
                    label: new Date().getFullYear(),
                    backgroundColor: "#3182ce",
                    borderColor: "#3182ce",
                    data: [65, 78, 66, 44, 56, 67, 75],
                    fill: false,
                },
                {
                    label: new Date().getFullYear() - 1,
                    fill: false,
                    backgroundColor: "#edf2f7",
                    borderColor: "#edf2f7",
                    data: [40, 68, 86, 74, 56, 60, 87],
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
                display: false,
                text: "Sales Charts",
                fontColor: "black",
            },
            legend: {
                labels: {
                    fontColor: "white",
                },
                align: "end",
                position: "bottom",
            },
            tooltips: {
                mode: "index",
                intersect: false,
            },
            hover: {
                mode: "nearest",
                intersect: true,
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            fontColor: "rgba(255,255,255,.7)",
                        },
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: "Month",
                            fontColor: "white",
                        },
                        gridLines: {
                            display: true,
                            borderDash: [2],
                            borderDashOffset: [2],
                            color: "rgba(33, 37, 41, 0.3)",
                            zeroLineColor: "rgba(0, 0, 0, 0)",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            fontColor: "rgba(255,255,255,.7)",
                        },
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: "Value",
                            fontColor: "white",
                        },
                        gridLines: {
                            borderDash: [3],
                            borderDashOffset: [3],
                            drawBorder: false,
                            color: "rgba(255, 255, 255, 0.15)",
                            zeroLineColor: "rgba(33, 37, 41, 0)",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                        },
                    },
                ],
            },
        },
    };

    return (
        <>
            <CanvasComponent canvasConfig={config} title="Vitals" label="Patient's Vitals" />
        </>
    );
}