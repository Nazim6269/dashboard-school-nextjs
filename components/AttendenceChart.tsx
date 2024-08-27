'use client';

import { barChartData } from '@/data';
import Image from 'next/image';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const AttendenceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      {/* Title portion */}
      <div className="flex justify-between items-center font-bold">
        <h2>Attendence</h2>
        <Image src={'/moreDark.png'} alt="students" width={20} height={20} />
      </div>
      {/* Chart portion */}

      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={barChartData} barSize={20}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={'#ddd'}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: '10px', border: 'none' }} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '38px' }}
          />
          <Bar
            dataKey="present"
            fill="#fae27c"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#cfceff"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
