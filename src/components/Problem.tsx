'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Search, Package, TrendingDown, Clock } from 'lucide-react';

export default function Problem() {
  const problems = [
    { icon: <Search className="w-5 h-5" />, text: '믿을 만한 공급처 찾기가 어려워요' },
    { icon: <Package className="w-5 h-5" />, text: '재고 부담이 너무 커요' },
    { icon: <TrendingDown className="w-5 h-5" />, text: '새로운 판로 찾기가 힘들어요' },
    { icon: <Clock className="w-5 h-5" />, text: '주문 관리에 시간이 너무 많이 들어요' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* 아이콘 */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5 }}
            className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-500 rounded-2xl mb-6"
          >
            <AlertCircle className="w-7 h-7" />
          </motion.div>

          {/* 타이틀 */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            어린이 만들기 시장,<br className="sm:hidden" /> 이런 고민 있으셨죠?
          </h2>

          <p className="text-gray-500 mb-10">
            셀러도, 공급사도 모두 겪는 문제들
          </p>

          {/* 문제 리스트 - 한 줄 또는 두 줄로 */}
          <div className="flex flex-wrap justify-center gap-3">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 text-gray-700"
              >
                <span className="text-red-400">{problem.icon}</span>
                <span className="text-sm font-medium">{problem.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
