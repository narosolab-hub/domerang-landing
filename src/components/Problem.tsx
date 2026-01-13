'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Package, TrendingUp, Users } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: '공급처 찾기 어려워요',
      description: '신뢰할 수 있는 공급사를 찾는 것이 어렵고 시간이 오래 걸립니다',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: '재고 부담이 커요',
      description: '초기 투자 비용이 크고 재고 관리에 어려움을 겪습니다',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '판로 확대가 어려워요',
      description: '공급사 입장에서 새로운 판매 채널을 찾기가 쉽지 않습니다',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '소량 주문 관리 복잡해요',
      description: '다양한 소량 주문을 효율적으로 관리하기 어렵습니다',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-red-500 font-semibold text-sm tracking-wider uppercase mb-4">Problem</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            어린이 만들기 시장,<br />이런 불편함 없으셨나요?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* 글로우 효과 */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500`}></div>
              
              {/* 카드 */}
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`inline-flex p-3 rounded-xl ${item.bgColor} ${item.iconColor} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}