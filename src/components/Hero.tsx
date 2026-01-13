'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#8B5FBF] via-[#A77DD1] to-[#C9A0E7] text-white">
      {/* Playful background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-300 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium">✨ 어린이 교구 도매 플랫폼</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              어린이 도매,<br />
              이제 도매랑에서 🎨
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/95">
              셀러와 공급사를 연결하는<br />
              <span className="inline-flex items-center gap-2">
                새로운 도매 플랫폼
                <motion.span 
                  className="inline-block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#672C8C] hover:bg-white/90 font-bold text-lg px-8 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                셀러로 시작하기
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-5 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                입점 문의하기
              </motion.button>
            </div>
          </motion.div>

          {/* 오른쪽: 이미지 목업 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* 가짜 대시보드 */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-white p-6">
                <div className="bg-white rounded-2xl shadow-lg h-full p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#672C8C] rounded-lg"></div>
                    <div className="w-24 h-6 bg-[#672C8C] rounded"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl"></div>
                    <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl"></div>
                    <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 떠다니는 뱃지 */}
            <motion.div
              className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-xl border-2 border-white"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉 오픈 준비중
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}