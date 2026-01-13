'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Store, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTM0aDEwdjEwSDM2em0xMC0xMGgxMHYxMEg0NnptLTEwIDBoMTB2MTBIMzZ6bTEwLTEwaDEwdjEwSDQ2em0tMTAgMGgxMHYxMEgzNnptLTEwIDEwaDEwdjEwSDI2em0wLTEwaDEwdjEwSDI2em0tMTAgMGgxMHYxMEgxNnptMTAtMTBoMTB2MTBIMjZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      {/* 애니메이션 원들 */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full opacity-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      ></motion.div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 배지 */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block mb-6"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-semibold">🎉 서비스 오픈 준비 중</span>
            </div>
          </motion.div>
          
          {/* 제목 */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            지금 도메랑과 함께<br />시작하세요
          </h2>
          
          {/* 설명 */}
          <p className="text-xl lg:text-2xl mb-4 text-white/90">
            어린이 도매 시장의 새로운 기회를 만나보세요
          </p>
          <p className="text-lg mb-10 text-white/80">
            서비스 준비 중입니다. 사전 신청하시면 오픈 시 알려드립니다.
          </p>
          
          {/* 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 hover:bg-white/90 font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              셀러로 시작하기
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-600 font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <Store className="w-5 h-5" />
              입점 문의하기
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}