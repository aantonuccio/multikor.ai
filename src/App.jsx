import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <img 
              src="/logo.png" 
              alt="Multikor.ai" 
              className="h-12 md:h-16"
            />
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center px-4 py-12">
          <div className="mx-auto max-w-4xl w-full text-center">
            <div className="text-white space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                Infrastructure-grade AI, without the noise.
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                A cloud-agnostic orchestration layer that learns your business, automates the right work, and keeps improving. Built to scale, document itself, and reduce operational risk—so your teams move faster with confidence.
              </p>
              
              <div className="pt-8 space-y-6">
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="flex flex-col items-center gap-4">
                    <Mail className="text-cyan-400" size={32} />
                    
                    <a 
                      href="mailto:info@multikor.ai"
                      className="text-white text-xl md:text-2xl font-semib
