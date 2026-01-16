'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Store } from 'lucide-react';

export default function Hero() {
  const scrollToFeatures = (role: 'seller' | 'supplier') => {
    // hash 변경으로 탭 자동 선택
    window.location.hash = `features-${role}`;

    // 스크롤 이동
    const element = document.getElementById('features');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

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
              <span className="text-sm font-medium">B2B 어린이 교구 도매 플랫폼</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              어린이 도매,<br />
              이제 도매랑에서
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/95">
              셀러와 공급사를 연결하는<br />
              새로운 도매 플랫폼
            </p>

            {/* 역할 선택 버튼 */}
            <div className="mb-8">
              <p className="text-white/80 text-sm mb-3">도매랑은 이런 분들을 위한 서비스입니다</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => scrollToFeatures('seller')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  셀러입니다
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={() => scrollToFeatures('supplier')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-colors"
                >
                  <Store className="w-5 h-5" />
                  입점사입니다
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#672C8C] hover:bg-white/90 font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                사전 안내 신청
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                입점 상담 요청
              </motion.button>
            </div>

            {/* 사전 신청 안내 */}
            <p className="mt-4 text-sm text-white/70">
              사전 신청자 대상 오픈 일정 및 혜택 우선 안내
            </p>
          </motion.div>

          {/* 오른쪽: 실제 화면 목업 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* 실제 서비스 화면 느낌의 목업 */}
              <div className="aspect-[4/3] bg-gray-50">
                {/* 상단 네비게이션 바 */}
                <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#672C8C] rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">D</span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">도매랑</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-7 bg-gray-100 rounded-md"></div>
                    <div className="w-8 h-8 bg-[#672C8C] rounded-full"></div>
                  </div>
                </div>

                {/* 메인 콘텐츠 영역 */}
                <div className="p-4">
                  {/* 검색 바 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <div className="flex-1 h-4 bg-gray-100 rounded"></div>
                      <div className="w-16 h-7 bg-[#672C8C] rounded-lg"></div>
                    </div>
                  </div>

                  {/* 카테고리 태그 */}
                  <div className="flex gap-2 mb-4 overflow-hidden">
                    <div className="px-3 py-1.5 bg-[#672C8C] text-white text-xs rounded-full whitespace-nowrap">전체</div>
                    <div className="px-3 py-1.5 bg-white text-gray-600 text-xs rounded-full border whitespace-nowrap">만들기</div>
                    <div className="px-3 py-1.5 bg-white text-gray-600 text-xs rounded-full border whitespace-nowrap">교구</div>
                    <div className="px-3 py-1.5 bg-white text-gray-600 text-xs rounded-full border whitespace-nowrap">미술</div>
                  </div>

                  {/* 상품 그리드 */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { color: 'from-pink-100 to-pink-200', price: '2,500', name: '클레이 만들기' },
                      { color: 'from-blue-100 to-blue-200', price: '3,200', name: '우드 교구' },
                      { color: 'from-yellow-100 to-yellow-200', price: '1,800', name: '스티커 세트' },
                      { color: 'from-green-100 to-green-200', price: '4,500', name: '과학 실험' },
                      { color: 'from-purple-100 to-purple-200', price: '2,900', name: '미술 재료' },
                      { color: 'from-orange-100 to-orange-200', price: '3,800', name: '퍼즐 교구' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className={`aspect-square bg-gradient-to-br ${item.color}`}></div>
                        <div className="p-2">
                          <div className="text-[10px] text-gray-500 truncate">{item.name}</div>
                          <div className="text-xs font-bold text-gray-800">{item.price}원</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 개발 중 표시 */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <div className="bg-gray-800/90 text-white px-4 py-1.5 rounded-full text-xs backdrop-blur-sm">
                실제 서비스 화면 예시 (개발 중)
              </div>
            </div>

            {/* 떠다니는 뱃지들 */}
            <motion.div
              className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-white"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              곧 오픈!
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-3 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl border-2 border-white"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              KC 인증 상품만
            </motion.div>
          </motion.div>
        </div>

        {/* 하단 숫자 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '300+', label: '상품 확보', sub: '1차 오픈 기준' },
            { number: '0원', label: '초기 재고 비용', sub: '위탁 판매 시작' },
            { number: '4+', label: '마켓 연동', sub: '스마트스토어, 쿠팡 등' },
            { number: '3일', label: '입점 심사', sub: '영업일 기준' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20"
            >
              <div className="text-3xl font-bold mb-1">{item.number}</div>
              <div className="text-white/90 text-sm font-medium">{item.label}</div>
              <div className="text-white/60 text-xs mt-1">{item.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
