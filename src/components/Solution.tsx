'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Store } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            도매랑이 연결합니다
          </h2>
          <p className="text-lg text-gray-600">
            셀러와 공급사, 하나의 플랫폼에서
          </p>
        </motion.div>

        {/* 연결 다이어그램 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
          {/* 셀러 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 max-w-xs mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">셀러</div>
                  <div className="text-sm text-gray-500">온·오프라인 판매자</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  재고 없이 판매 시작
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  4개 마켓 자동 연동
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  주문·배송 자동화
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 화살표 + 도매랑 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col lg:flex-row items-center gap-4"
          >
            <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 lg:rotate-0" />

            {/* 도매랑 로고 */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#672C8C] to-[#8B3FAD] rounded-2xl flex items-center justify-center shadow-xl">
                <img src="/logo.png" alt="도매랑" className="w-16 h-16 object-contain" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-2 bg-purple-400 rounded-2xl blur-xl opacity-20 -z-10"
              ></motion.div>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 lg:rotate-0" />
          </motion.div>

          {/* 공급사 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 max-w-xs mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">공급사</div>
                  <div className="text-sm text-gray-500">교구 제조·유통사</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  전국 셀러에게 노출
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  마켓 연동으로 간편 등록
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  주문 자동 수집
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 하단 강조 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-2xl shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#672C8C]">300+</div>
              <div className="text-xs text-gray-500">상품 확보</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#672C8C]">0원</div>
              <div className="text-xs text-gray-500">초기 비용</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#672C8C]">4+</div>
              <div className="text-xs text-gray-500">마켓 연동</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
