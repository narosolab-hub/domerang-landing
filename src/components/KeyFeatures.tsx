'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart, Store, Upload, Bell, TrendingUp, MessageSquare, BarChart3, Package, Sparkles, Check } from 'lucide-react';

export default function KeyFeatures() {
  const [activeTab, setActiveTab] = useState<'seller' | 'supplier'>('seller');

  const sellerFeatures = [
    {
      title: '원클릭 마켓 등록',
      subtitle: '4개 마켓에 동시 등록',
      desc: '마이픽에 담은 상품을 버튼 하나로 스마트스토어, 쿠팡, 11번가, G마켓에 자동 등록하세요.',
      points: ['상품 정보 자동 입력', '이미지 자동 최적화', '카테고리 자동 매칭'],
      mockup: (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full">
          <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#672C8C] rounded-lg flex items-center justify-center text-white font-bold">D</div>
              <div className="font-semibold text-gray-800">마이픽 상품</div>
              <div className="ml-auto bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">3개 선택됨</div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {['from-pink-200 to-pink-300', 'from-blue-200 to-blue-300', 'from-yellow-200 to-yellow-300'].map((color, i) => (
                <div key={i} className={`aspect-square bg-gradient-to-br ${color} rounded-xl relative`}>
                  <div className="absolute top-1 right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-colors">
              4개 마켓에 상품 전송
            </button>
          </div>
          <div className="flex justify-center gap-2">
            {['스마트스토어', '쿠팡', '11번가', 'G마켓'].map((market, i) => (
              <div key={i} className="bg-white px-3 py-1.5 rounded-full text-xs text-gray-600 shadow-sm">{market}</div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: '주문 자동 수집 & 발주',
      subtitle: '클릭 한 번으로 끝',
      desc: '각 마켓에서 들어온 주문을 자동으로 수집하고, 클릭 한 번이면 공급사에 발주가 완료됩니다.',
      points: ['마켓별 주문 자동 취합', '수기 주문도 가능', '발주 현황 실시간 확인'],
      mockup: (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-gray-800">신규 주문</div>
              <div className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium">12건 대기</div>
            </div>
            <div className="space-y-2 mb-4">
              {[
                { market: '스마트스토어', count: 5, color: 'bg-green-500' },
                { market: '쿠팡', count: 4, color: 'bg-red-500' },
                { market: '11번가', count: 3, color: 'bg-orange-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                  <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
                  <span className="text-sm text-gray-700 flex-1">{item.market}</span>
                  <span className="text-sm font-semibold text-gray-900">{item.count}건</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-medium">주문 수집</button>
              <button className="bg-green-500 text-white py-2.5 rounded-lg text-sm font-medium">일괄 발주</button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '배송 · 문의 통합 관리',
      subtitle: '한 곳에서 모두 해결',
      desc: '배송 상태 업데이트는 모든 마켓에 자동 반영되고, 흩어진 고객 문의도 한눈에 확인하세요.',
      points: ['배송상태 자동 동기화', '마켓별 문의 통합', '미답변 문의 알림'],
      mockup: (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full">
          <div className="grid grid-cols-2 gap-3 h-full">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="text-sm font-semibold text-gray-800 mb-3">배송 동기화</div>
              <div className="space-y-2">
                {['스마트스토어', '쿠팡', '11번가'].map((market, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">{market}</span>
                    <span className="ml-auto text-green-600">동기화됨</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-gray-800">통합 문의</div>
                <div className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full">3건</div>
              </div>
              <div className="space-y-2">
                {[
                  { market: '쿠팡', msg: '배송 언제...' },
                  { market: '스토어', msg: '사이즈 문의' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-2">
                    <div className="text-[10px] text-blue-600 mb-0.5">{item.market}</div>
                    <div className="text-xs text-gray-700 truncate">{item.msg}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
  ];

  const supplierFeatures = [
    {
      title: '마켓 연동 & 상품 불러오기',
      subtitle: '기존 상품 그대로',
      desc: '이미 판매 중인 외부 마켓을 연동하면, 등록된 상품 정보를 그대로 불러올 수 있어요. 엑셀보다 훨씬 편해요.',
      points: ['스마트스토어/쿠팡 연동', '상품 정보 자동 불러오기', '이미지·상세정보 그대로'],
      mockup: (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="font-semibold text-gray-800 mb-4">외부 마켓 연동</div>
            <div className="space-y-3 mb-4">
              {[
                { name: '스마트스토어', connected: true, count: 128 },
                { name: '쿠팡', connected: true, count: 95 },
                { name: '11번가', connected: false, count: 0 },
              ].map((market, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                  <div className={`w-2 h-2 ${market.connected ? 'bg-green-500' : 'bg-gray-300'} rounded-full`}></div>
                  <span className="text-sm text-gray-700 flex-1">{market.name}</span>
                  {market.connected ? (
                    <span className="text-sm font-semibold text-green-600">{market.count}개 상품</span>
                  ) : (
                    <button className="text-xs text-blue-500 font-medium">연동하기</button>
                  )}
                </div>
              ))}
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-colors">
              223개 상품 불러오기
            </button>
          </div>
        </div>
      )
    },
    {
      title: '실시간 통계 & 정산',
      subtitle: '투명한 데이터',
      desc: '이번 달 얼마나 팔렸고, 얼마가 정산될지 대시보드에서 실시간으로 확인하세요.',
      points: ['일별/월별 판매 통계', '정산 예정 금액 확인', '셀러별 판매 현황'],
      mockup: (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="font-semibold text-gray-800 mb-4">이번 달 현황</div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">127</div>
                <div className="text-xs text-gray-500 mt-1">총 주문</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-green-600">2.34M</div>
                <div className="text-xs text-gray-500 mt-1">정산 예정</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-500 mb-2">주간 판매 추이</div>
              <div className="h-16 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-orange-300 rounded-t transition-all hover:bg-orange-400" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
  ];

  const features = activeTab === 'seller' ? sellerFeatures : supplierFeatures;

  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#672C8C] font-semibold text-sm tracking-wider uppercase mb-4">Key Features</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            이런 기능이 있어요
          </h2>

          {/* 탭 버튼 */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('seller')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'seller'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              셀러
            </button>
            <button
              onClick={() => setActiveTab('supplier')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'supplier'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Store className="w-4 h-4" />
              공급사
            </button>
          </div>
        </motion.div>

        {/* 기능 섹션들 - 좌우 교차 */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* 텍스트 */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
                  activeTab === 'seller' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {feature.subtitle}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        activeTab === 'seller' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 목업 */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.mockup}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Coming Soon: 우수 셀러 & 우수 공급사 매칭 기능</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
