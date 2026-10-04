import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'inline' | 'stacked' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'inline'
}) => {
  // SVG of the official "The Only Ads" graphic with the dragon 's'
  const OfficialStackedSvg = ({ width = 140 }: { width?: number }) => (
    <svg
      viewBox="0 0 320 380"
      width={width}
      className="overflow-visible select-none drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "The" Row */}
      <g id="row-the">
        {/* T (White) */}
        <path
          d="M10 25 H80 V48 H53 V115 H33 V48 H10 Z"
          fill="#FFFFFF"
        />
        {/* h (Lavender #AE94FF) */}
        <path
          d="M90 25 H110 V58 C115 52 122 48 132 48 C144 48 152 56 152 70 V115 H132 V74 C132 68 128 64 122 64 C116 64 110 68 110 74 V115 H90 Z"
          fill="#AE94FF"
        />
        {/* e (Lavender #AE94FF) */}
        <path
          d="M165 48 H220 V115 H165 Z M183 66 V78 H202 V66 Z M183 89 V98 H202 V89 Z"
          fill="#AE94FF"
          fillRule="evenodd"
        />
      </g>

      {/* "Only" Row */}
      <g id="row-only">
        {/* O (White block) */}
        <path
          d="M10 135 H82 V225 H10 Z M33 158 H59 V202 H33 Z"
          fill="#FFFFFF"
          fillRule="evenodd"
        />
        {/* n (White block) */}
        <path
          d="M93 135 H165 V225 H142 V162 H116 V225 H93 Z"
          fill="#FFFFFF"
        />
        {/* l (White block) */}
        <path
          d="M176 135 H200 V225 H176 Z"
          fill="#FFFFFF"
        />
        {/* y (White faceted block) */}
        <path
          d="M211 135 H238 L256 182 L274 135 H301 L268 200 V225 H244 V200 Z"
          fill="#FFFFFF"
        />
      </g>

      {/* "Ads" Row */}
      <g id="row-ads">
        {/* A (White block) */}
        <path
          d="M10 245 H82 V335 H59 V295 H33 V335 H10 Z M33 268 H59 V278 H33 Z"
          fill="#FFFFFF"
          fillRule="evenodd"
        />
        {/* d (White block) */}
        <path
          d="M93 245 H165 V335 H93 Z M116 268 H142 V312 H116 Z"
          fill="#FFFFFF"
          fillRule="evenodd"
        />
        {/* s (Purple stylized Dragon Creature from official design) */}
        <path
          d="M178 276 C178 262 188 253 205 253 C218 253 228 258 234 263 L246 257 C248 256 251 259 250 262 L246 267 C255 267 260 270 263 273 C261 276 257 277 253 278 L260 282 C255 284 250 284 246 283 C242 291 234 294 225 296 C238 299 248 305 248 318 C248 332 235 342 216 342 C198 342 188 335 182 328 L190 322 C186 325 180 329 174 329 C170 329 168 326 170 323 C173 320 178 318 184 316 L178 312 C184 312 192 315 197 319 C202 324 209 328 217 328 C227 328 233 323 233 316 C233 308 223 305 210 302 C194 299 178 293 178 276 Z M194 275 C194 282 201 285 212 287 C222 285 230 280 230 273 C230 267 225 264 218 264 C203 264 194 268 194 275 Z"
          fill="#AE94FF"
        />
      </g>
    </svg>
  );

  // Dragon silhouette icon for compact emblem
  const DragonIcon = ({ sizeClass = 'w-7 h-7' }: { sizeClass?: string }) => (
    <div className={`relative flex items-center justify-center ${sizeClass}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-[#AE94FF] drop-shadow-[0_0_8px_rgba(174,148,255,0.4)]"
        fill="currentColor"
      >
        <path d="M25 35 C25 20 38 10 60 10 C76 10 88 17 95 24 L98 16 C100 14 103 18 101 22 L96 28 C105 28 110 32 112 36 C110 39 104 40 100 41 L108 47 C102 49 96 49 91 48 C86 58 75 62 64 65 C80 69 92 77 92 93 C92 110 76 122 53 122 C30 122 18 114 10 105 L20 97 C15 101 8 106 1 106 C-4 106 -7 102 -4 98 C0 94 6 91 14 89 L6 84 C14 84 24 88 30 93 C36 99 45 104 55 104 C67 104 75 98 75 89 C75 79 63 75 47 71 C27 67 7 59 7 38 Z" transform="scale(0.7) translate(15, 10)" />
      </svg>
    </div>
  );

  if (variant === 'stacked') {
    const widthMap = {
      sm: 100,
      md: 130,
      lg: 170,
      xl: 220,
    };
    return (
      <div className={`inline-block ${className}`}>
        <OfficialStackedSvg width={widthMap[size]} />
      </div>
    );
  }

  if (variant === 'icon') {
    const iconSizeMap = {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
      xl: 'w-12 h-12',
    };
    return (
      <div className={`p-1.5 rounded-lg bg-zinc-950 border border-white/10 ${className}`}>
        <DragonIcon sizeClass={iconSizeMap[size]} />
      </div>
    );
  }

  // Horizontal / Inline Brand Lockup with the official styling
  const textSizeMap = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Miniature Emblem */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-950/90 border border-white/10 group-hover:border-[#AE94FF]/40 transition-colors shadow-inner overflow-hidden flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-5 h-5 text-[#AE94FF]"
          fill="currentColor"
        >
          {/* Dragon S glyph from logo */}
          <path d="M25 35 C25 20 38 10 60 10 C76 10 88 17 95 24 L98 16 C100 14 103 18 101 22 L96 28 C105 28 110 32 112 36 C110 39 104 40 100 41 L108 47 C102 49 96 49 91 48 C86 58 75 62 64 65 C80 69 92 77 92 93 C92 110 76 122 53 122 C30 122 18 114 10 105 L20 97 C15 101 8 106 1 106 C-4 106 -7 102 -4 98 C0 94 6 91 14 89 L6 84 C14 84 24 88 30 93 C36 99 45 104 55 104 C67 104 75 98 75 89 C75 79 63 75 47 71 C27 67 7 59 7 38 Z" transform="scale(0.7) translate(15, 10)" />
        </svg>
        <div className="absolute inset-0 bg-[#AE94FF]/10 blur-sm pointer-events-none" />
      </div>

      {/* Typography with authentic official palette */}
      <div className={`font-black tracking-[-0.03em] uppercase flex items-baseline gap-1.5 ${textSizeMap[size]}`}>
        <span className="text-white">The</span>
        <span className="text-white">Only</span>
        <span className="text-[#AE94FF] inline-flex items-center">
          Ads
        </span>
      </div>
    </div>
  );
};
