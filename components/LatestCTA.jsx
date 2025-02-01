"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const StaticCTAButton = () => {
  return (
    <section className="tw-pt-20 tw-pb-10 py-32">
          <style jsx>{`
        .tw-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
      `}</style>
      <div className="container mx-auto px-4 text-center tw-py-10 tw-bg-gray text-mint-500 font-mono relative overflow-hidden tw-rounded-full">
        <motion.div
          className="absolute inset-0 tw-bg-gradient-to-r tw-from-green-200 tw-to-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="relative mb-6">
          <Image
            src="/images/adaotoken.png"
            alt="ADAO Token"
            width={50}
            height={50}
            className="tw-bounce"
          />
        </div>
        <h2 className="tw-text-3xl md:tw-text-5xl tw-font-bold mb-6 tw-text-white">Seize the Future with ADAO Tokens!</h2>
        <p className="text-xl tw-text-white/70 mb-12 max-w-2xl mx-auto">
          Don&apos;t miss your chance to be part of the next big leap in digital innovation. With our DEX listing set for February, the value of ADAO Tokens is poised to soar. Secure your tokens today and position yourself at the forefront of the digital agent revolution. Act now and join a community that&apos;s shaping the future of decentralized technology.
        </p>
        <button
          className="tw-bg-gray-800 hover:tw-bg-gray-700 tw-text-white tw-font-bold tw-text-lg tw-px-12 tw-py-6 tw-rounded-xl tw-shadow-lg tw-transform tw-transition-transform tw-duration-300 hover:tw-scale-105"
          onClick={() => window.open('https://adao.ai', '_blank')}
        >
          Buy ADAO Tokens Now
        </button>
      </div>
    
    </section>
  );
};

export default StaticCTAButton;