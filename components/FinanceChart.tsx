'use client';

import { financeChartData } from '@/data';
import Image from 'next/image';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      {/* Title portion */}
      <div className="flex justify-between items-center font-bold">
        <h2>Finance</h2>
        <Image src={'/moreDark.png'} alt="students" width={20} height={20} />
      </div>
      {/* Chart portion */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={financeChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#d1d5db' }}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#d1d5db' }}
            tickMargin={20}
          />
          <Tooltip contentStyle={{ border: 'none', borderRadius: '10px' }} />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '36px' }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#fae27c"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#cfceff"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
