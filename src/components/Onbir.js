import React from 'react'

export default function Onbir() {
    const chartData = {
        labels: ['Reasons'],
        datasets: [
          {
            label: 'Having difficulties using the product',
            data: [131],
          
            barPercentage: 1,
            categoryPercentage: 1,
          },
          {
            label: 'Missing features I need',
            data: [100],
      
            barPercentage: 1,
            categoryPercentage: 1,
          },
          {
            label: 'Not satisfied about the quality of the product',
            data: [81],
      
            barPercentage: 1,
            categoryPercentage: 1,
          },
          {
            label: 'The product doesn’t look as advertised',
            data: [65],
           
            barPercentage: 1,
            categoryPercentage: 1,
          },
          {
            label: 'Other',
            data: [72],
           
            barPercentage: 1,
            categoryPercentage: 1,
          },
        ],
      };
  return (
         <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Reason for Refunds</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">449</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-22%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
      </div>
    </div>
  )
}
