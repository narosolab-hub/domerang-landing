'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Rocket } from 'lucide-react';

export default function Vision() {
  const visions = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: '셀러 편의성',
      description: '누구나 쉽게 시작할 수 있는 플랫폼',
      detail: '복잡한 절차 없이, 기술적 어려움 없이 누구나 쉽게 도매 비즈니스를 시작할 수 있는 환경을 만듭니다',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: '공급사 성장',
      description: '함께 성장하는 파트너십',
      detail: '공급사와 셀러가 서로 윈윈할 수 있는 건강한 생태계를 구축하여 모두가 성장합니다',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: '시장 혁신',
      description: '어린이 도매 시장의 새로운 기준',
      detail: '기존의 비효율적인 도매 유통 구조를 혁신하여 투명하고 효율적인 시장을 만들어갑니다',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#672C8C] via-[#8B3FAD] to-[#321148] text-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMTAtMTBoMTB2MTBINDZ6bS0xMCAwaDEwdjEwSDM2em0xMC0xMGgxMHYxMEg0NnptLTEwIDBoMTB2MTBIMzZ6bS0xMCAxMGgxMHYxMEgyNnptMC0xMGgxMHYxMEgyNnptLTEwIDBoMTB2MTBIMTZ6bTEwLTEwaDEwdjEwSDI2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      {/* Blob 애니메이션 */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            도메랑이 만드는 미래
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            어린이 도매 시장의 새로운 기준을 만들어갑니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              {/* 글로우 효과 */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${vision.gradient} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
              
              {/* 카드 */}
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-white mb-6 transform group-hover:scale-110 transition-transform">
                  {vision.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{vision.title}</h3>
                <p className="text-lg text-white/90 mb-4">{vision.description}</p>
                <p className="text-white/70 leading-relaxed text-sm">{vision.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}