'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Zap, Link2, Package, BarChart3, Box, FileText, Target, Globe, Settings, UserPlus } from 'lucide-react';

export default function Features() {
  const [activeTab, setActiveTab] = useState<'seller' | 'supplier'>('seller');

  const sellerFeatures = [
    { icon: <Zap className="w-6 h-6" />, title: '마켓 자동 연동', desc: '스마트스토어, 쿠팡 등 주요 마켓 자동 연동' },
    { icon: <Link2 className="w-6 h-6" />, title: '위탁 판매', desc: '재고 부담 없이 위탁으로 판매 시작' },
    { icon: <Package className="w-6 h-6" />, title: '다양한 상품', desc: '여러 공급사의 상품을 한 곳에서 관리' },
    { icon: <Target className="w-6 h-6" />, title: '간편한 주문', desc: '클릭 몇 번으로 주문 완료' },
    { icon: <Globe className="w-6 h-6" />, title: '직배송 지원', desc: '고객에게 직접 배송되어 편리함' },
    { icon: <BarChart3 className="w-6 h-6" />, title: '실시간 재고', desc: '품절 걱정 없는 실시간 재고 확인' }
  ];

  const supplierFeatures = [
    { icon: <UserPlus className="w-6 h-6" />, title: '간편 입점', desc: '복잡한 절차 없이 빠른 입점' },
    { icon: <Box className="w-6 h-6" />, title: '상품 관리', desc: '직관적인 대시보드로 상품 관리' },
    { icon: <Link2 className="w-6 h-6" />, title: '셀러 자동 연결', desc: '등록 즉시 셀러들에게 노출' },
    { icon: <Settings className="w-6 h-6" />, title: '주문 자동화', desc: '주문 수집부터 처리까지 자동화' }
  ];

  const features = activeTab === 'seller' ? sellerFeatures : supplierFeatures;
  const accentColor = activeTab === 'seller' ? 'blue' : 'orange';

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#672C8C] font-semibold text-sm tracking-wider uppercase mb-4">Features</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            이렇게 편리해집니다
          </h2>
        </motion.div>

        {/* 탭 버튼 */}
        <div className="flex justify-center gap-4 mb-16">
          <motion.button
            onClick={() => setActiveTab('seller')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'seller'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
            }`}
          >
            🛒 셀러
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('supplier')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'supplier'
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
            }`}
          >
            🏢 공급사
          </motion.button>
        </div>

        {/* 기능 카드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${
                accentColor === 'blue' ? 'from-blue-500 to-blue-600' : 'from-orange-500 to-orange-600'
              } rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500`}></div>
              
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  accentColor === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}