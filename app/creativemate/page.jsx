"use client";
import React, { useState, useRef, useEffect } from "react";
import Header_01 from "@/components/header/Header_01";
import useAccordion from "@/components/hooks/useAccordion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Footer_01 from "@/components/footer/Footer_01";
import CompanySlider from "@/components/ui/CompanySlider";
import data from "../blogData.json";
import { Play, TrendingUp, BarChart3 } from "lucide-react";

import { Brain, Zap, Target, Sparkles, Clock ,Users,Award } from "lucide-react";

function CreativeMate(){

    const features = [
      {
        icon: Brain,
        title: "Privacy",
        description:
          "On-premise, private models to ensure complete security and protection of your Instagram data and insights.",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: Zap,
        title: "Personalization",
        description:
          "AI tailored to your specific Instagram audience and content style for maximum engagement and authenticity.",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: Target,
        title: "Powerful",
        description:
          "Optimized algorithms power your Instagram strategy with proven engagement-driving content formats.",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: Sparkles,
        title: "Customizable",
        description:
          "Agile solutions adapt to your specific Instagram niche, brand voice, and audience preferences.",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Performance Tracking",
        description:
          "Monitor your Reels performance with detailed analytics and get insights on how to improve your content strategy.",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: Clock,
        title: "Optimal Timing",
        description:
          "Publish your Reels at the perfect time when your audience is most active for maximum reach and engagement.",
        color: "from-blue-500 to-blue-600",
      },
    ];
    const stats = [
      {
        icon: Users,
        number: "500K+",
        label: "Active Creators",
        description: "Growing community worldwide",
      },
      {
        icon: Play,
        number: "2.5M+",
        label: "Reels Generated",
        description: "And counting every day",
      },
      {
        icon: TrendingUp,
        number: "300%",
        label: "Avg. Engagement Boost",
        description: "Compared to regular posts",
      },
      {
        icon: Award,
        number: "98%",
        label: "Customer Satisfaction",
        description: "Love using our platform",
      },
    ];
    return (
      <>
        <Header_01 />
        <main className="mb-[100px]">
          {/*...::Breadcrum section::..... */}

          <section className="relative min-h-screen flex items-center justify-center gradient-blue overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Democratizing
                  <span className="text-blue-700"> Instagram Data</span>
                  <br />
                  Analytics with AI
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Unlock the full potential of your Instagram data with
                  AI-driven analytics and automation, delivering personalized,
                  data-informed Reels that maximize your reach.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button className="group bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <span className="flex items-center gap-2">
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Get started for free
                    </span>
                  </button>
                  <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                    Learn more
                  </button>
                </div>

                <div className="flex justify-center gap-8 text-gray-700">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>AI-Powered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Data-Driven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    <span>Auto-Generated</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*...Feature section */}
          <section className="py-20 bg-colorLinenRuffle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Core features that
                  <span className="text-blue-700"> make it valuable</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Everything you need to create viral Instagram Reels and grow
                  your audience with data-driven insights.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.slice(0, 4).map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex justify-center mb-6">
                      <feature.icon className="w-12 h-12 text-black" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="reel-video-section" className="py-20">
            <div className="pb-20 xl:pb-[150px]">
              {/* Section Container */}
              <div className="global-container">
                <div className="flex flex-col md:flex-row w-full  p-4">
                  {/* Left side: Grid of reels */}
                  <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4 pr-4">
                    {[...Array(6)].map((_, index) => (
                      <video
                        key={index}
                        src={`/reels/reel${index + 1}.mp4`} // Replace with your reel video paths
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    ))}
                  </div>

                  {/* Right side: Text content */}
                  <div className="flex-1 flex flex-col justify-start pl-4">
                    <h2 className="md:text-7xl font-bold mb-4">
                      AI-Powered Reels That Outperform{" "}
                      <span className="text-blue-700">Your Competitors</span>
                    </h2>
                    <p className="md:text-lg text-gray-600">
                      Stay ahead with smart, data-driven content. Our AI
                      analyzes top-performing reels from your competitors and
                      instantly generates captivating short videos tailored to
                      your brand. No guesswork, just growth.
                    </p>
                    <Link
                      href="#"
                      className="button w-[100%] md:w-[30%] my-2 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="reel-video-section" className="py-20">
            <div className="pb-20 xl:pb-[150px]">
              {/* Section Container */}
              <div className="global-container">
                <div className="flex flex-col md:flex-row w-full  p-4">
                  {/* Left side: Grid of reels */}
                  <div className="flex-1  pr-4">
                    <Image
                      src="/assets/img-product.png"
                      width={800}
                      height={800}
                      alt="nope"
                    />
                  </div>

                  {/* Right side: Text content */}
                  <div className="flex-1 flex flex-col justify-start pl-4">
                    <h2 className="md:text-7xl font-bold mb-4">
                      AI-Enhanced Photos That Elevate{" "}
                      <span className="text-blue-700">
                        Your Brand Instantly
                      </span>
                    </h2>
                    <p className="md:text-lg text-gray-600">
                      Stand out with stunning visuals. Our AI transforms
                      ordinary product photos into professional-grade images
                      using simple prompts — no studio needed. Impress
                      customers, boost conversions, and leave your competitors
                      behind.
                    </p>
                    <Link
                      href="#"
                      className="button w-[100%] md:w-[30%] my-2 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Stats section */}
          <section className="py-20 bg-colorLinenRuffle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Trusted by Creators
                  <span className="text-blue-700"> Worldwide</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Join thousands of successful creators who&apos;ve transformed their
                  Instagram presence with our platform.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>

                      <div className="text-xl font-semibold text-gray-700 mb-2">
                        {stat.label}
                      </div>

                      <div className="text-gray-500">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer_01 />
      </>
    );
}

export default CreativeMate