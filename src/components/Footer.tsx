'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">도메랑</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              셀러와 공급사를 연결하는<br />
              어린이 교구 도매 플랫폼
            </p>
            <p className="text-sm text-gray-500">
              새로운 도매 경험을 만들어갑니다
            </p>
          </div>
          
          {/* 서비스 */}
          <div>
            <h4 className="font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  셀러 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  공급사 입점
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  이용 약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
          
          {/* 문의 */}
          <div>
            <h4 className="font-semibold text-white mb-4">문의</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@domerang.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>서울특별시 강남구<br />도매로 123</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 하단 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 도메랑. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                블로그
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                인스타그램
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                카카오톡
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}