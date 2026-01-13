'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Store, Network } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#672C8C] font-semibold text-sm tracking-wider uppercase mb-4">Solution</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            도메랑이 연결합니다
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            셀러와 공급사를 하나의 플랫폼에서 효율적으로 연결하여<br />
            모두가 성장할 수 있는 생태계를 만듭니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* 셀러 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
              <ShoppingCart className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">셀러</h3>
              <p className="text-blue-100 leading-relaxed">재고 없이 판매를 시작하고 싶은 온·오프라인 판매자</p>
            </div>
          </motion.div>

          {/* 도메랑 (중앙) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:-mt-8"
          >
            <motion.div 
              className="bg-gradient-to-br from-[#672C8C] to-[#321148] p-10 rounded-full shadow-2xl mb-4 relative"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              {/* 이미지 로고 */}
              <div className="relative z-10 w-20 h-20 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="도메랑 로고" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">도메랑</h3>
            <p className="text-gray-600 text-center">B2B 어린이 교구 플랫폼</p>
          </motion.div>

          {/* 공급사 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white shadow-xl">
              <Store className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">공급사</h3>
              <p className="text-orange-100 leading-relaxed">판로를 확대하고 싶은 어린이 교구 제조·유통사</p>
            </div>
          </motion.div>
        </div>

        {/* 하단 특징 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { emoji: '📦', title: '재고 없이 판매 가능', desc: '위탁 판매로 초기 비용 부담 없이 시작' },
            { emoji: '🔗', title: '다양한 공급사 한 곳에서', desc: '여러 공급사의 상품을 통합 관리' },
            { emoji: '⚡', title: '자동화된 주문 관리', desc: '마켓 연동부터 배송까지 자동 처리' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}