'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Zap, Link2, Package, BarChart3, Box, Target, Globe, Settings, UserPlus } from 'lucide-react';

export default function Features() {
  const [activeTab, setActiveTab] = useState<'seller' | 'supplier'>('seller');

  // URL hash로 탭 자동 선택
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#features-supplier' || hash === '#supplier') {
        setActiveTab('supplier');
      } else if (hash === '#features-seller' || hash === '#seller') {
        setActiveTab('seller');
      }
    };

    // 초기 로드 시 체크
    handleHashChange();

    // hash 변경 감지
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const sellerFeatures = [
    { icon: <Zap className="w-6 h-6" />, title: '마켓 자동 연동', desc: '상품 등록 한 번이면, 스마트스토어·쿠팡 등 4개 마켓에 동시 노출' },
    { icon: <Link2 className="w-6 h-6" />, title: '재고 0원 시작', desc: '위탁 판매로 초기 비용 없이 시작, 판매 후 정산' },
    { icon: <Package className="w-6 h-6" />, title: '300종+ 상품', desc: 'KC 인증된 어린이 교구, 골라 담기만 하세요' },
    { icon: <Target className="w-6 h-6" />, title: '주문 자동 처리', desc: '고객 주문 → 공급사 자동 발주, 수작업 없이 처리' },
    { icon: <Globe className="w-6 h-6" />, title: '포장·배송 위탁', desc: '포장과 배송은 공급사가, 셀러는 판매에만 집중' },
    { icon: <BarChart3 className="w-6 h-6" />, title: '품절 사고 방지', desc: '실시간 재고 연동으로 품절 상품 자동 비노출' }
  ];

  const supplierFeatures = [
    { icon: <UserPlus className="w-6 h-6" />, title: '3일 내 입점 완료', desc: '서류 제출 후 영업일 기준 3일, 복잡한 심사 없이 빠르게' },
    { icon: <Box className="w-6 h-6" />, title: '엑셀 대량 등록', desc: '상품 1000개도 한 번에, 이미지 자동 최적화까지' },
    { icon: <Link2 className="w-6 h-6" />, title: '전국 셀러 노출', desc: '등록 즉시 전국 셀러에게 상품 노출, 별도 영업 불필요' },
    { icon: <Settings className="w-6 h-6" />, title: '주문 자동 수집', desc: '셀러 주문 자동 취합, 출고 지시서 한 번에 확인' },
    { icon: <BarChart3 className="w-6 h-6" />, title: '정산 투명 관리', desc: '판매 현황·정산 내역 실시간 대시보드로 확인' },
    { icon: <Target className="w-6 h-6" />, title: '판로 확대', desc: '스마트스토어, 쿠팡 등 4개+ 마켓에 내 상품이 동시 판매' }
  ];

  const features = activeTab === 'seller' ? sellerFeatures : supplierFeatures;
  const accentColor = activeTab === 'seller' ? 'blue' : 'orange';

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
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