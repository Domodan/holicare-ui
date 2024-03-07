"use client"
import { Chart, ChartOptions, registerables } from 'chart.js';
import React from 'react';

const CanvasComponent = ({ canvasConfig, label, title }: { canvasConfig: any, label?: string, title?: string }) => {

    React.useEffect(() => {
        const chartOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Satoshi, sans-serif'
                        }
                    }
                }
            }
        };

        // registers
        Chart.register(...registerables);
        // chart options
        Chart.defaults.set('global', chartOptions);

        let chartInstance: Chart | null = null;

        // render chart on the canvas
        const canvas = document.getElementById('cs') as HTMLCanvasElement;

        if (canvas) {
            // Destroy previous chart instance if exists
            if (chartInstance) {
                (chartInstance as Chart).destroy();
            }

            chartInstance = new Chart(canvas, canvasConfig);

            return () => {
                if (chartInstance) {
                    (chartInstance as Chart).destroy();
                    chartInstance = null;
                }
            };
        }
    }, [canvasConfig]);

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-boxdark w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                            {label}
                        </h6>
                        <h2 className="text-blueGray-700 text-xl font-semibold">{title}</h2>
                    </div>
                </div>
            </div>
            <div className="p-4 flex-auto">
                {/* Chart */}
                <div className="relative h-75">
                    <canvas id='cs'></canvas>
                </div>
            </div>
        </div>
    );
};

export default CanvasComponent;