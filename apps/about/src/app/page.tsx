'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@dongdev/shared/components/ui/badge';
import { Button } from '@dongdev/shared/components/ui/button';
import { Card } from '@dongdev/shared/components/ui/card';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const techStacks = [
    { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
    { name: 'TypeScript', color: 'bg-blue-600 text-white' },
    { name: 'Python', color: 'bg-blue-500 text-white' },
    { name: 'React', color: 'bg-cyan-400 text-black' },
    { name: 'React Native', color: 'bg-cyan-400 text-black' },
    { name: 'Expo', color: 'bg-gray-900 text-white' },
    { name: 'Next.js', color: 'bg-black text-white' },
    { name: 'Redux', color: 'bg-purple-600 text-white' },
    { name: 'Zustand', color: 'bg-black text-white' },
    { name: 'React Query', color: 'bg-cyan-300 text-black' },
    { name: 'Express', color: 'bg-green-500 text-white' },
    { name: 'Node.js', color: 'bg-green-600 text-white' },
    { name: 'FastAPI', color: 'bg-blue-500 text-white' },
    { name: 'Prisma', color: 'bg-gray-800 text-white' },
    { name: 'MongoDB', color: 'bg-green-500 text-white' },
    { name: 'PostgreSQL', color: 'bg-blue-700 text-white' },
    { name: 'Styled Components', color: 'bg-pink-500 text-white' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500 text-white' },
    { name: 'Storybook', color: 'bg-pink-500 text-white' },
    { name: 'Playwright', color: 'bg-blue-500 text-white' },
    { name: 'GitHub Actions', color: 'bg-gray-900 text-white' },
    { name: 'Docker', color: 'bg-blue-600 text-white' },
    { name: 'Vercel', color: 'bg-black text-white' },
    { name: 'AWS', color: 'bg-orange-600 text-white' },
  ];

  const experiences = [
    {
      company: '(주) FutureWorkLab',
      position: '사원',
      period: '2024.10 -',
      description: '현재 재직 중'
    },
    {
      company: '(주) EXEM',
      position: '인턴',
      period: '2023.07 - 2023.12',
      description: '인턴십 경험'
    }
  ];

  const activities = [
    {
      title: '홍익대학교 컴퓨터공학전공 학술동아리 _P.C.R.C_ 32기',
      period: '2018.03 - 2019.12',
      description: '학술 동아리 활동'
    },
    {
      title: '고려대학교 창업 준비 동아리 _Novelia_ FE 개발',
      period: '2023.01 - 2023.05',
      description: '프론트엔드 개발'
    },
    {
      title: '홍익대학교 학습튜터링2 (홍익투게더) 멘토 _이끄미_ 활동',
      period: '2023.03 - 2023.07',
      description: '멘토링 활동'
    }
  ];

  const education = [
    {
      title: '홍익대학교 정보컴퓨터공학부 컴퓨터공학전공',
      period: '2018.03 - 2024.08',
      description: '학사 졸업'
    },
    {
      title: '인프런 X 코드캠프 고농축 프론트엔드 온라인 코스',
      period: '2023.07 - 2024.01',
      description: '프론트엔드 전문 과정'
    },
    {
      title: '원티드 프리온보딩 프론트엔드 3월 챌린지',
      period: '2024.03',
      description: '프론트엔드 챌린지'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="instagram-gradient-text">Lee Dongwook</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
                  프로덕트 엔지니어를 목표하는
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  문제를 발견하고 기술적으로 해결하는 과정을 꾸준히 지속하고자 합니다.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="instagram-gradient text-white hover:opacity-90 transition-all duration-300"
                  size="lg"
                >
                  이력서 보기
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-300 hover:border-purple-500 transition-all duration-300"
                >
                  포트폴리오
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/dong-wook-lee-1095112a0/" 
                   className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://velog.io/@dlehddnr99/" 
                   className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm16.5 16.5V4.5h-15v15h15z"/>
                    <path d="M7.5 7.5h9v9h-9z"/>
                  </svg>
                </a>
                <a href="https://linkbrain.kr" 
                   className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image Placeholder */}
            <div className={`flex justify-center ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-full animate-float">
                  <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        Product Engineer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xl">💡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 instagram-gradient-text">Tech Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              다양한 기술 스택으로 문제를 해결합니다
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStacks.map((tech, index) => (
              <div
                key={tech.name}
                className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Badge className={`w-full h-16 flex items-center justify-center text-sm font-medium ${tech.color} hover:scale-105 transition-transform duration-300`}>
                  {tech.name}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 instagram-gradient-text">Work Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              다양한 경험을 통해 성장하고 있습니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card
                key={exp.company}
                className={`p-8 hover:shadow-xl transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{exp.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 instagram-gradient-text">Activities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              다양한 활동을 통해 경험을 쌓았습니다
            </p>
          </div>
          
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <Card
                key={activity.title}
                className={`p-8 hover:shadow-xl transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{activity.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">{activity.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 instagram-gradient-text">Education</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              지속적인 학습을 통해 성장하고 있습니다
            </p>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={edu.title}
                className={`p-8 hover:shadow-xl transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">{edu.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4">
            문제를 발견하고 기술적으로 해결하는 과정을 꾸준히 지속하고자 합니다.
          </p>
          <p className="text-gray-400">
            © 2024 Lee Dongwook. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
