import React from 'react';
import { Button, type buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import type { VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Mail,
  Star,
  Home,
  Truck,
  Calculator as CalculatorIcon,
  Users,
  ChevronDown,
  Menu,
  X,
  Play
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ArrowRight,
  Mail,
  Star,
  Home,
  Truck,
  Calculator: CalculatorIcon,
  Users,
  ChevronDown,
  Menu,
  X,
  Play,
};

interface CtaButtonProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  icon?: string;
  target?: string;
  rel?: string;
  asChild?: boolean;
  className?: string;
}

export interface HeroSectionProps {
  title: React.ReactNode;
  preTitle?: React.ReactNode;
  description?: string | React.ReactNode;
  ctaButtons?: CtaButtonProps[];
  backgroundType?: 'color' | 'gradient' | 'image';
  backgroundColor?: string;
  backgroundGradient?: string;
  backgroundImageUrl?: string;
  backgroundImageAlt?: string;
  backgroundOverlayOpacity?: number;
  textColorClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  visualElement?: React.ReactNode;
  layout?: 'center-stacked' | 'split-visual-right' | 'split-visual-left';
  minHeight?: string;
  contentMaxWidth?: string;
  textAlignment?: 'text-center' | 'text-left' | 'text-right';
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export function HeroSection({
  title,
  preTitle,
  description,
  ctaButtons,
  backgroundType = 'image',
  backgroundColor = 'bg-[#050810]',
  backgroundGradient = 'bg-gradient-to-br from-primary to-primary/80',
  backgroundImageUrl = '/bannerenvios.webp',
  backgroundImageAlt = 'Hero background image',
  backgroundOverlayOpacity = 0.2,
  textColorClassName = 'text-white',
  titleClassName = 'text-3xl sm:text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.9] mb-8 uppercase text-white font-[family-name:var(--font-orbitron)]',
  descriptionClassName = 'text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-[family-name:var(--font-roboto)]',
  visualElement,
  layout = 'center-stacked',
  minHeight = 'min-h-screen',
  contentMaxWidth = 'max-w-7xl',
  textAlignment = 'text-center',
  className = '',
  children,
  priority = false,
}: HeroSectionProps) {

  let bgClasses = '';
  if (backgroundType === 'color') bgClasses = backgroundColor;
  else if (backgroundType === 'gradient') bgClasses = backgroundGradient;
  else if (backgroundType === 'image') bgClasses = 'bg-[#050810]';

  const sectionClasses = cn(
    'relative flex items-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 px-6',
    minHeight,
    bgClasses,
    className
  );

  const textContentWrapper = (
     <div
      className={cn(
        'relative z-10 w-full',
        layout === 'center-stacked' ? `mx-auto ${contentMaxWidth} ${textAlignment}` :
        (layout === 'split-visual-right' ? `${textAlignment} lg:text-left` :
         layout === 'split-visual-left' ? `${textAlignment} lg:text-right` : textAlignment),
      )}
    >
      {preTitle && (
        <div className="mb-8">
          {typeof preTitle === 'string' ? (
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {preTitle}
             </div>
          ) : preTitle}
        </div>
      )}

      <h1 className={cn(titleClassName, "animate-fade-in-up")}>
        {title}
      </h1>

      {description && (
        <div
          className={cn(descriptionClassName, textAlignment === 'text-left' ? 'mr-auto' : textAlignment === 'text-right' ? 'ml-auto' : 'mx-auto', "animate-fade-in-up")}
          style={{ animationDelay: '0.1s' }}
        >
            {description}
        </div>
      )}

      {children && <div className="mt-6 md:mt-8">{children}</div>}

      {ctaButtons && ctaButtons.length > 0 && (
        <div
          className={cn(
            'flex flex-col sm:flex-row gap-6 items-center',
            textAlignment === 'text-center' ? 'justify-center' :
            (layout === 'split-visual-right' || textAlignment === 'text-left') ? 'justify-start' :
            (layout === 'split-visual-left' || textAlignment === 'text-right') ? 'justify-end' :
            'justify-center'
          )}
        >
          {ctaButtons.map((button, index) => {
            const IconComponent = button.icon ? iconMap[button.icon] : null;

            // Special styling for primary-like buttons to match HeroAnimado's yellow button
            const isYellowButton = button.variant === 'secondary';

            return (
              <div
                key={index}
                className="transition-transform hover:scale-105 active:scale-95 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Button
                  variant={button.variant || 'default'}
                  asChild
                  className={cn(
                    'px-10 py-5 font-[family-name:var(--font-orbitron)] font-black rounded-xl transition-all uppercase tracking-tight h-auto',
                    isYellowButton
                      ? "bg-secondary hover:bg-secondary/90 text-black shadow-[0_0_20px_rgba(251,191,36,0.3)] animate-pulse-glow"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 overflow-hidden relative group",
                    button.className
                  )}
                >
                  <Link href={button.href} target={button.target} rel={button.rel}>
                    {!isYellowButton && (
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                    )}
                    {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
                    {button.text}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <section className={sectionClasses}>
      {/* Background Image with Overlay */}
      {backgroundType === 'image' && backgroundImageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImageUrl}
            alt={backgroundImageAlt}
            fill
            className="object-cover opacity-20"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810]" />
        </div>
      )}

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Text Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 pointer-events-none z-0">
        <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className={cn("container mx-auto relative z-10 w-full", layout === 'center-stacked' ? "" : "grid lg:grid-cols-2 gap-12 items-center")}>
        {layout === 'center-stacked' ? textContentWrapper : (
           <>
             {layout === 'split-visual-left' && visualElement && (
                <div className="relative flex justify-center items-center">
                  {visualElement}
                </div>
             )}
             {textContentWrapper}
             {layout === 'split-visual-right' && visualElement && (
                <div className="relative flex justify-center items-center">
                  {visualElement}
                </div>
             )}
           </>
        )}
      </div>

      {/* Use standard CSS for animations instead of styled-jsx if possible,
          but since this is a Server Component, styled-jsx won't work well without client boundary.
          Actually, Next.js supports styled-jsx in server components now, but standard Tailwind is preferred.
          The pulse-glow and shimmer are already in globals.css or can be added via arbitrary values or tailwind config.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
          50% { box-shadow: 0 0 35px rgba(251, 191, 36, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}} />
    </section>
  );
}
