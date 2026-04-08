import { cn } from "./lib/utils"

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuA29c1zd38blA3YV4YBUF2v2T6ebwB-dsuSjV7eUQbjzVrckFY6eScDeyoy3k5p3OO832HzlXU38wsqo6oyO5dW9aCuPoqEb7U70EGdeeNFSTG0eVBp4gg91Km7TDCt4f8uqIwcYaBFcbpCP1c39lLMGBysQQ9lYYSTCLExwMQzSW3XHVOPLZCQQTYAlnxjGoUlcjEIPNwd82K7VR1hVruUNnBef-6sASMmoUTjmyVrNkgZC8EYIybu-2CKlbbAqn7448iUWehoTY4",
  service1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXRkwSqToHuZ6FMZoSMYl20xqWDisI8mfkonuIcqD-XrsJ9pMg0mcFo66QIC9BJ2pNiye5tLaIva0i6hNFbhkPpmcaojxLDhfGuabghD0WToaLBuimE1gP1sfZ_PYLAY1uymxp-cdKteox40u2JQSWRoNmORyjYcgRc2t1V2PulpHzmbnhbTQ3o9KW-VctSzMVjZoEZuKID_RuYa3hNjT2Ho8tatitgavjqNVFveaPXEKVAXiEs6qp0YtzuYNlSWyAxBnJHCoJAA4",
  service2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGmWbWZaMPbzYyg5nqD0oSO2PJiNgeiaRF8ZspEcDnLBXKJ4PcY314YGJ_5t_HExBSyeu4ECNcahHPRVWM_ROORSkBnkJnZfBrr9bsQuffFILN3q47L_6keCVAIAT9kL9W6Z7tdA_xl03bqcsY1TQOwYleipzixgKVOtZd0WTfm2ecTNv_7R-VqityI4gm_Jp3e6Oa22T9dSkfN3P9klJkhpLxfsM34LQZvymx-heHCRTuFBrhQD0gLfX3c7OoTEWqsSMc0SI3B2Q",
  service3: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7f-oENIfP6mUTU8alahAO4X1LKKFb2lJqn11iA7-Jczp-7_vBeQyKjZbqTrokBGWKP_iFMYxncX8nZd4pY3MMpiRs10aMIDG-mThICii1YU8kFbDt0FefOHLIsaMTx0mDpxLSjLXZLQykikPw90HKJEv6ENdJYdyrKMrwbfp3y0gfrhxRdMWFbmbQHvDy3rQrz2FeY-EGH5-4XzPidPVFfDfS1UKanIcsdaItWzG76me2zleV786VqHIlXhiEPwZU6edv6dAcbVs",
  service4: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQDYRlQjfANqvIVYnxB7TPGrTGBP_8f3ebO6q1A4mcsj5YkJ0KAfU0YT_EtCzwUa3C-wGB1dFffrDir2noOgJfx0ebeYvOi-5No9KOuYtVdBSqHySV7_4YbMpq8HZpC-BG_a1lFfGpiX5Jy4BiFfkPrvfRIK8JJcvJAoHX2meUyI-K3sLiY92P7NyT4cW12wFaOqpNtnlLQrYTjJYt7B5k5bU81v3zE-A1lcIubQj_5S1ZhzEj-nCBuhDE9x2K2OD7RtmbluGd1Rs",
  ba1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP3nViaytjR6kove-9Yapc_GDQ3PDh2g06N9ineZKeI58yAbrhut5FdRx1q7Ks0ytys9yw6ufEUWpWhIK06NHH1bqWDTJnFcQJb2b40YT1xVf0Ovmkfisd5RteMxn0ZAisLXLn7OVHDTYRHvTqa4di-HPTTxl7O7wI8NcGJlXppApHvIVNRLIRCRbbXSFoWpUdcTn_ILc_7t33RffEzx89Yp6mLn-kEoy-5v_8EUY3QsM9pyZQOE2lAJ6DgPvN3CJlNSMcphiKChU",
  ba2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsQZS5oA8BJxj_pqsv4I-yZUhPuLVeqq3Tr9gjMewzAhe23cBgYFpMlYrYw5WdiEajChw8b9ppJqY45EoGNbZOiyT7F3cZR0JDPORjtFOwzQoGsMHPnCH3LcVmywUXqBI-VDeAkSYaHgw-uMGhzCLikzNxvGutcEzIiOYK58680M2yCzeyhlob5nsWJiOl16J2-IGmctWaEXM_ppg_OVwVQzYCMzqoiIinChBxvK4U0yruxs22Ou8w5rcoANHaYsHTh0-XlEto4hw",
  ba3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm945E20sWjtfqu8QfOtpe_JZzR0SE2K8-FsXhN03ayEJQgmbK96GxX1udPgLRxIpIUSQ1d0q4t2Zs_thG5bWCnZSkxrKtBjChur6g9f_9elOecSmEcx3WFIguw4Dt4uT2wjius3bQ0HOgV3U9j-alwgD1C5F-Us9VxlUSDLWu_Bt13AH2HjzwIbhGLZCJ1BYUjR68oIeEBsSXNYD0VXf_CzjxA6dYIVTygG3Uv4Zi1_4aeHo5zvV9T52qvzWMWpLXUI1bjTqWxR4",
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* ═══════════════════ HERO with Video ═══════════════════ */}
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-white/20">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
        </video>

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tight text-foreground">Clean Fit</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#why" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">왜 클린핏?</a>
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">서비스</a>
            <a href="#gallery" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">갤러리</a>
            <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">가격</a>
            <a href="#reviews" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">후기</a>
          </div>
          <button className={cn("liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] cursor-pointer")}>
            예약하기
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center pt-20 pb-32">
          <div>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm text-foreground/80 rounded-full border border-white/10">
              투명한 가격 · 정직한 청소
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8 text-foreground animate-fade-rise">
              투명한 가격의<br /><span className="text-foreground/60">정직한 청소</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-lg leading-relaxed animate-fade-rise-delay">
              추가요금 없이, 처음 안내받은 견적 그대로. 클린핏이 약속합니다.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-rise-delay-2">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-sky-500/20">
                지금 예약하기
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-foreground px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                가격표 보기
              </button>
            </div>
          </div>
          <div className="relative h-[450px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" src={IMAGES.hero} alt="깨끗한 인테리어" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* ═══════════════════ WHY CLEAN FIT ═══════════════════ */}
      <section id="why" className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-4 text-slate-900">Why Clean Fit?</h2>
              <p className="text-slate-600 text-lg">우리가 공간을 대하는 태도가 품질을 결정합니다.</p>
            </div>
            <div className="h-px flex-grow mx-8 bg-slate-200 hidden md:block" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔧", title: "전문성", desc: "전문가와 최신 장비가 만드는\n표준화된 청소 품질을 경험하세요." },
              { icon: "💰", title: "투명성", desc: "현장 추가 요금 없이, 처음 안내받은\n정찰 견적 그대로 진행합니다." },
              { icon: "✓", title: "신뢰성", desc: "여성 기업 인증, 관공서가 검증한\n공인 자활 기업입니다." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col justify-between group hover:border-sky-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-12 group-hover:bg-sky-50 transition-colors text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed whitespace-pre-line">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 text-center text-slate-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: IMAGES.service1, title: "입주/이사 청소", desc: "새 집에 입주하거나 이사할 때\n완벽한 초기화 청소" },
              { img: IMAGES.service2, title: "거주 청소", desc: "생활 공간의 정기적인 관리와\n위생 유지" },
              { img: IMAGES.service3, title: "학교/기관 청소", desc: "교육시설, 관공서 등\n대규모 공간 전문 청소" },
              { img: IMAGES.service4, title: "사무실/상업 청소", desc: "기업 사무실, 식당 등\n비즈니스 공간 맞춤 청소" },
            ].map((item) => (
              <div key={item.title} className="relative group h-[400px] overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.img} alt={item.title} />
                <div className="absolute inset-0 bg-slate-900/40 flex flex-col justify-end p-8">
                  <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm whitespace-pre-line">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BEFORE & AFTER ═══════════════════ */}
      <section id="gallery" className="py-24 px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4 text-slate-900">눈으로 확인하는 클린핏의 실력</h2>
            <p className="text-slate-600">작업 전후를 직접 비교해보세요</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: IMAGES.ba1, label: "욕실 물때 및 곰팡이 제거" },
              { img: IMAGES.ba2, label: "주방 후드 기름때 정밀 세척" },
              { img: IMAGES.ba3, label: "창틀 및 틈새 먼지 완벽 차단" },
            ].map((item) => (
              <div key={item.label} className="space-y-4">
                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg">
                  <img className="w-full h-full object-cover" src={item.img} alt={item.label} />
                  <div className="absolute bottom-4 left-4 bg-sky-500 text-white text-[10px] px-2 py-1 uppercase tracking-widest font-black rounded">After</div>
                </div>
                <p className="font-bold text-lg px-2 text-slate-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRICING ═══════════════════ */}
      <section id="pricing" className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4 text-slate-900">투명한 가격, 숨겨진 비용 없음</h2>
            <p className="text-slate-500 max-w-lg mx-auto">정찰제 운영을 통해 고객님의 불필요한 견적 고민을 해결해드립니다.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            {[
              { label: "원룸 / 투룸", price: "15만원 ~", highlight: true },
              { label: "쓰리룸 이상", price: "25만원 ~", highlight: true },
              { label: "정기 청소 (월 1회)", price: "10만원 ~", highlight: true },
              { label: "학교 / 기업", price: "별도 견적 문의", highlight: false },
            ].map((item, i) => (
              <div key={item.label} className={cn(
                "p-8 flex justify-between items-center bg-white",
                i < 3 && "border-b border-slate-200"
              )}>
                <span className="font-bold text-xl text-slate-700">{item.label}</span>
                <span className={item.highlight ? "text-sky-600 font-black text-2xl" : "text-slate-400 font-bold text-lg"}>{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-4 p-6 bg-sky-50 rounded-xl border border-sky-100">
            <span className="text-sky-500 text-xl">ℹ</span>
            <p className="text-sm text-sky-700 leading-relaxed">
              현장에서 추가요금을 받지 않습니다. 오염도에 따른 추가 비용은 사전에 안내드립니다.
              면적 및 특수 오염 상황에 따라 견적은 상이할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ REVIEWS ═══════════════════ */}
      <section id="reviews" className="py-24 px-8 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter mb-16 text-center uppercase text-slate-900">Real Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "김지은 님", type: "입주 청소 이용", initial: "K", text: "이사 청소를 맡겼는데 정말 구석구석 깨끗해서 놀랐어요. 추가 요금도 전혀 없어서 더 믿음이 갔습니다." },
              { name: "이준혁 대표", type: "사무실 청소 이용", initial: "L", text: "사무실 정기 청소를 6개월째 이용 중인데 항상 일정하게 깔끔합니다. 직원들이 모두 만족해해요." },
              { name: "박서연 님", type: "거주 청소 이용", initial: "P", text: "기름때가 심했던 주방이 새 것처럼 변했어요. 전문가의 손길은 확실히 다르네요. 강력 추천합니다." },
            ].map((item) => (
              <div key={item.name} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60">
                <div className="flex gap-1 mb-4 text-sky-500 text-sm">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-lg mb-8 italic text-slate-700 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold text-sky-600">{item.initial}</div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOOKING CTA ═══════════════════ */}
      <section className="py-24 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4">가장 쉬운 예약 방법</h2>
            <p className="text-slate-400">단 세 단계로 프리미엄 청소 서비스를 예약하세요.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { num: "01", title: "서비스 선택", desc: "필요한 청소 타입과\n면적을 선택하세요." },
              { num: "02", title: "사진 업로드", desc: "현장 사진을 보내주시면\n더 정확한 상담이 가능합니다." },
              { num: "03", title: "예약 완료", desc: "상담 후 최종 일정을 확정하면\n예약이 끝납니다." },
            ].map((item) => (
              <div key={item.num} className="text-center">
                <div className="text-7xl font-black text-sky-500/20 mb-4">{item.num}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="w-full md:w-auto bg-white text-slate-900 px-10 py-4 rounded-lg font-black hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl">
              📅 네이버 예약
            </button>
            <button className="w-full md:w-auto bg-[#FEE500] text-[#191919] px-10 py-4 rounded-lg font-black hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl">
              💬 카카오톡 상담
            </button>
            <button className="w-full md:w-auto bg-transparent border-2 border-slate-700 text-white px-10 py-4 rounded-lg font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              📞 전화 문의
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-12 max-w-screen-2xl mx-auto gap-4">
          <div className="text-lg font-black text-slate-800">Clean Fit</div>
          <div className="flex gap-8">
            <a className="text-sm font-medium text-slate-500 hover:text-sky-500 transition-colors" href="#">개인정보처리방침</a>
            <a className="text-sm font-medium text-slate-500 hover:text-sky-500 transition-colors" href="#">이용약관</a>
            <a className="text-sm font-medium text-slate-500 hover:text-sky-500 transition-colors" href="#">문의하기</a>
          </div>
          <div className="text-sm font-medium text-slate-500 opacity-80">
            &copy; 2024 Clean Fit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
