'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Baby, Heart } from 'lucide-react';

export default function KCCertification() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#672C8C] to-[#8B3FAD] text-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* 아이콘 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <ShieldCheck className="w-14 h-14 text-white" />
            </div>
          </motion.div>

          {/* 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              KC 인증 제품만 취급합니다
            </h2>
            <p className="text-white/80 text-lg mb-6">
              어린이제품 안전 특별법에 따른 KC 인증을 받은 제품만 등록할 수 있어요.<br className="hidden lg:block" />
              셀러는 안심하고 판매하고, 우리 아이들은 안전하게.
            </p>

            {/* 포인트 */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm">안전 인증 필수</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4" />
                <span className="text-sm">믿고 판매</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Baby className="w-4 h-4" />
                <span className="text-sm">아이 안전 최우선</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
