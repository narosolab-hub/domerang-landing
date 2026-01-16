'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart, Store, Package, Upload, MousePointer, Truck, Users, ClipboardList, ArrowRight } from 'lucide-react';

export default function ProcessFlow() {
  const [activeTab, setActiveTab] = useState<'seller' | 'supplier'>('seller');

  const sellerSteps = [
    { icon: <Package className="w-6 h-6" />, title: '상품 선택', desc: '도매랑에서 원하는 상품 골라담기' },
    { icon: <Upload className="w-6 h-6" />, title: '마켓 등록', desc: 'API로 내 마켓에 한 번에 등록' },
    { icon: <ClipboardList className="w-6 h-6" />, title: '주문 수집', desc: '자동 수집 또는 수기 발주' },
    { icon: <MousePointer className="w-6 h-6" />, title: '클릭 발주', desc: '클릭 몇 번으로 공급사에 발주' },
    { icon: <Truck className="w-6 h-6" />, title: '자동 배송', desc: '공급사가 고객에게 직배송' },
  ];

  const supplierSteps = [
    { icon: <Upload className="w-6 h-6" />, title: '상품 등록', desc: '외부 마켓 연동 or 간편 등록' },
    { icon: <Users className="w-6 h-6" />, title: '셀러 노출', desc: '전국 셀러에게 자동 노출' },
    { icon: <ShoppingCart className="w-6 h-6" />, title: '판매 확대', desc: '셀러들이 각자 마켓에 등록' },
    { icon: <ClipboardList className="w-6 h-6" />, title: '주문 확인', desc: '어드민에서 주문 한눈에' },
    { icon: <Truck className="w-6 h-6" />, title: '상품 발송', desc: '출고 지시서로 바로 발송' },
  ];

  const steps = activeTab === 'seller' ? sellerSteps : supplierSteps;
  const accentColor = activeTab === 'seller' ? 'blue' : 'orange';

  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#672C8C]/10 text-[#672C8C] rounded-full text-sm font-semibold mb-4">
            편의 기능
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            복잡한 건 도매랑이 알아서
          </h2>
          <p className="text-lg text-gray-600">
            자동이든 수동이든, 원하는 방식으로 운영하세요
          </p>
        </motion.div>

        {/* 탭 버튼 */}
        <div className="flex justify-center gap-3 mb-12">
          <motion.button
            onClick={() => setActiveTab('seller')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'seller'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            셀러라면
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('supplier')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'supplier'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Store className="w-4 h-4" />
            공급사라면
          </motion.button>
        </div>

        {/* 플로우 스텝 */}
        <div className="relative">
          {/* 연결선 (데스크톱) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0 mx-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
                    accentColor === 'blue' ? 'border-blue-100 hover:border-blue-300' : 'border-orange-100 hover:border-orange-300'
                  }`}
                >
                  {/* 단계 번호 */}
                  <div className={`absolute -top-3 -left-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    accentColor === 'blue' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}>
                    {index + 1}
                  </div>

                  {/* 아이콘 */}
                  <div className={`inline-flex p-3 rounded-xl mb-3 ${
                    accentColor === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {step.icon}
                  </div>

                  {/* 텍스트 */}
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </motion.div>

                {/* 화살표 (모바일/태블릿) */}
                {index < steps.length - 1 && (
                  <div className={`lg:hidden flex justify-center my-2 ${accentColor === 'blue' ? 'text-blue-300' : 'text-orange-300'}`}>
                    <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 하단 안내 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500">
            * 모든 단계는 <span className="font-semibold text-gray-700">자동 연동</span> 또는 <span className="font-semibold text-gray-700">수기 입력</span> 모두 지원됩니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
