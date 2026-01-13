'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Baby, AlertCircle } from 'lucide-react';

export default function KCCertification() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: '안전 인증',
      description: 'KC 인증 완료 제품만 등록 가능',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '믿고 판매',
      description: '셀러는 안심하고 판매할 수 있어요',
      gradient: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: '아이들 생각',
      description: '우리 아이들의 안전이 최우선',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 주의 알림 배너 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span>⚠️ 잠깐!</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-orange-600">아이들을 위한 제품</span>인데 그냥 넘어갈 건가요?<br />
                  도매랑은 <span className="font-bold">어린이 안전</span>을 최우선으로 생각합니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* 배지 */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-6 font-semibold text-sm shadow-lg"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              안전 보장
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            KC 인증된 안전한 제품만 판매
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            도매랑에서는 어린이제품 안전 특별법에 따른{' '}
            <span className="font-bold text-[#672C8C]">KC 인증을 받은 제품</span>만을 취급합니다
          </p>
        </motion.div>

        {/* 특징 카드들 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* 글로우 효과 */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500`}></div>

              {/* 카드 */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                {/* 아이콘 */}
                <div className={`inline-flex p-4 rounded-xl ${feature.bgColor} ${feature.iconColor} mb-4`}>
                  {feature.icon}
                </div>

                {/* 제목 */}
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>

                {/* 설명 */}
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 강조 메시지 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#672C8C] to-[#8B3FAD] text-white p-10 lg:p-12 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* 배경 패턴 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              KC 인증이 필요한 제품은<br className="sm:hidden" /> 상품 등록 시 KC 인증이 필수입니다
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              공급사는 KC 인증 대상 제품에 대해 인증서를 제출해야 하며,<br className="hidden sm:block" />
              셀러는 인증된 안전한 제품만을 판매할 수 있습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}