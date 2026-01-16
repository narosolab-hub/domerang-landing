'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { UserPlus, Package, Link2, Rocket, ShoppingCart, Store } from 'lucide-react';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'seller' | 'supplier'>('seller');

  const sellerSteps = [
    { icon: <UserPlus className="w-6 h-6" />, title: '회원가입', desc: '5분이면 완료' },
    { icon: <Package className="w-6 h-6" />, title: '상품 선택', desc: '마이픽에 담기' },
    { icon: <Link2 className="w-6 h-6" />, title: '마켓 연동', desc: 'API 자동 연결' },
    { icon: <Rocket className="w-6 h-6" />, title: '판매 시작', desc: '주문 자동 처리' },
  ];

  const supplierSteps = [
    { icon: <UserPlus className="w-6 h-6" />, title: '입점 신청', desc: '3일 내 완료' },
    { icon: <Package className="w-6 h-6" />, title: '상품 등록', desc: '마켓 연동 or 직접' },
    { icon: <Link2 className="w-6 h-6" />, title: '셀러 연결', desc: '자동 노출' },
    { icon: <Rocket className="w-6 h-6" />, title: '주문 관리', desc: '통합 어드민' },
  ];

  const steps = activeTab === 'seller' ? sellerSteps : supplierSteps;
  const accentColor = activeTab === 'seller' ? 'blue' : 'orange';

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#672C8C] font-semibold text-sm tracking-wider uppercase mb-4">How to Start</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            4단계로 시작하세요
          </h2>

          {/* 탭 버튼 */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('seller')}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'seller'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              셀러
            </button>
            <button
              onClick={() => setActiveTab('supplier')}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'supplier'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Store className="w-4 h-4" />
              공급사
            </button>
          </div>
        </motion.div>

        {/* 수평 타임라인 */}
        <div className="relative">
          {/* 연결선 */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full ${accentColor === 'blue' ? 'bg-blue-400' : 'bg-orange-400'}`}
            ></motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* 원형 아이콘 */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`relative z-10 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white shadow-lg ${
                    accentColor === 'blue'
                      ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                      : 'bg-gradient-to-br from-orange-400 to-orange-600'
                  }`}
                >
                  {step.icon}
                  {/* 단계 번호 */}
                  <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    accentColor === 'blue' ? 'bg-blue-700 text-white' : 'bg-orange-700 text-white'
                  }`}>
                    {index + 1}
                  </div>
                </motion.div>

                {/* 텍스트 */}
                <div className="mt-4">
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
