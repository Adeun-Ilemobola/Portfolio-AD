import { useEffect, useState } from 'react';
import { api } from './lib/api';
import { motion } from "framer-motion";
import GradientBorderWrapper from './components/GradientBorderWrapper';

function App() {
  const [data, setData] = useState<{ message: string; timestamp: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const Res = await api.test.$get();
      const Data = await Res.json();
      setData(Data);
    };

    fetchData();
    return () => {
      setData(null);
    }; // Clean up function to prevent memory leaks
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg p-6 bg-white rounded-2xl shadow-lg text-center"
      >
        <h1 className="text-3xl font-bold text-amber-500">TodoMap</h1>
        {data ? (
          <p className="mt-2 text-gray-600">
            {data.message} - {new Date(data.timestamp).toLocaleTimeString()}
          </p>
        ) : (
          <p className="mt-2 text-gray-600">Loading...</p>
        )}
      </motion.div> */}

      <GradientBorderWrapper>
        <p className="text-white">Hello, World!</p>
      </GradientBorderWrapper>
    </div>
  );
}

export default App;
