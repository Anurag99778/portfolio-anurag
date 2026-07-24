import { motion } from 'framer-motion';

/**
 * Button with a rotating conic-gradient "traveling light" border — the
 * Aceternity "moving border" trick, done with a rotating gradient square
 * behind an inset solid layer instead of the borderless-rect + offsetPath
 * version (cheaper, no SVG needed).
 */
export default function MovingBorderButton({ as: Tag = 'a', children, className = '', innerClassName = '', ...rest }) {
  return (
    <Tag className={`relative inline-flex p-[1.5px] overflow-hidden rounded-xl cursor-hover ${className}`} {...rest}>
      <motion.span
        className="absolute inset-[-1000%]"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, #06b6d4 0%, #8b5cf6 33%, #f59e0b 66%, #06b6d4 100%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
      />
      <span className={`relative z-10 inline-flex items-center gap-2 rounded-[10px] ${innerClassName}`}>
        {children}
      </span>
    </Tag>
  );
}
