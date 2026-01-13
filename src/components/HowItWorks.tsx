'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { UserPlus, Package, Link2, CheckCircle, ShoppingCart, Store } from 'lucide-react';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'seller' | 'supplier'>('seller');

  const sellerSteps = [
    {
      number: '01',
      icon: <UserPlus className="w-8 h-8" />,
      title: '회원가입',
      description: '간단한 정보 입력으로 도매랑 셀러 회원가입을 완료하세요',
      details: ['5분 안에 가입 완료', '스마트스토어, 쿠팡 등 연동', 'API 키 자동 발급'],
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      number: '02',
      icon: <Package className="w-8 h-8" />,
      title: '상품 선택',
      description: '다양한 공급사의 상품 중 원하는 상품을 선택하세요',
      details: ['다양한 공급사 상품 탐색', '클릭 몇 번으로 등록', '자동 상품 정보 입력'],
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      number: '03',
      icon: <Link2 className="w-8 h-8" />,
      title: '마켓 연동',
      description: '스마트스토어, 쿠팡 등 판매 채널을 연동하세요',
      details: ['주요 마켓 자동 연동', '상품 정보 동기화', '재고 실시간 업데이트'],
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      number: '04',
      icon: <CheckCircle className="w-8 h-8" />,
      title: '판매 시작',
      description: '재고 걱정 없이 바로 판매를 시작하세요',
      details: ['주문 자동 수집', '공급사에 자동 발주', '직배송으로 편리하게'],
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    }
  ];

  const supplierSteps = [
    {
      number: '01',
      icon: <UserPlus className="w-8 h-8" />,
      title: '입점 신청',
      description: '간단한 서류 제출로 공급사 입점을 신청하세요',
      details: ['빠른 심사 절차', '온라인으로 간편하게', '영업일 기준 3일 이내'],
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    },
    {
      number: '02',
      icon: <Package className="w-8 h-8" />,
      title: '상품 등록',
      description: '판매하실 상품을 등록하고 상세 정보를 입력하세요',
      details: ['직관적인 상품 등록', '엑셀 대량 등록 지원', '이미지 자동 최적화'],
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    },
    {
      number: '03',
      icon: <Link2 className="w-8 h-8" />,
      title: '셀러 연결',
      description: '등록한 상품이 자동으로 셀러들에게 노출됩니다',
      details: ['전국 셀러에게 노출', '자동 매칭 시스템', '실시간 판매 현황'],
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    },
    {
      number: '04',
      icon: <CheckCircle className="w-8 h-8" />,
      title: '주문 관리',
      description: '들어온 주문을 확인하고 출고를 처리하세요',
      details: ['주문 자동 수집', '출고 지시 간편화', '배송 추적 자동화'],
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    }
  ];

  const steps = activeTab === 'seller' ? sellerSteps : supplierSteps;
  const accentColor = activeTab === 'seller' ? 'blue' : 'orange';

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#672C8C] font-semibold text-sm tracking-wider uppercase mb-4">How to Use</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            도매랑, 이렇게 사용하세요
          </h2>
          <p className="text-xl text-gray-600">
            간단한 4단계로 시작하는 도매 비즈니스
          </p>
        </motion.div>

        {/* 탭 버튼 */}
        <div className="flex justify-center gap-4 mb-16">
          <motion.button
            onClick={() => setActiveTab('seller')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'seller'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md border-2 border-gray-200'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            셀러 가이드
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('supplier')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'supplier'
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md border-2 border-gray-200'
            }`}
          >
            <Store className="w-5 h-5" />
            공급사 가이드
          </motion.button>
        </div>

        {/* 스텝 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* 단계 번호 배지 */}
              <div className="absolute -top-4 -right-4 z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  {step.number}
                </motion.div>
              </div>

              {/* 카드 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${step.bgColor} p-6 rounded-2xl h-full transition-all duration-300 border-2 ${
                  accentColor === 'blue' ? 'border-blue-100 hover:border-blue-300' : 'border-orange-100 hover:border-orange-300'
                }`}
              >
                {/* 아이콘 */}
                <div className={`inline-flex p-4 rounded-xl ${step.iconBg} text-white mb-4`}>
                  {step.icon}
                </div>
                
                {/* 제목 */}
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                
                {/* 설명 */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                
                {/* 상세 항목 */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600">
                      <span className="text-green-500 mr-2 flex-shrink-0 mt-0.5">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* 화살표 (마지막 제외) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-0">
                  <div className={`text-3xl ${accentColor === 'blue' ? 'text-blue-300' : 'text-orange-300'}`}>
                    →
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}