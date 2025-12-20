import { useMemo } from 'react';

const GradientText = ({
  children,
  className = '',
  colors = ['#06b6d4', '#22d3ee', '#67e8f9', '#06b6d4'],
  animationSpeed = 8,
  showBorder = false,
  style = {},
}) => {
  const gradientStyle = useMemo(() => {
    const gradientColors = colors.join(', ');
    return {
      backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
      backgroundSize: '300% 100%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: `gradient-text-flow ${animationSpeed}s ease infinite`,
      ...style,
    };
  }, [colors, animationSpeed, style]);

  const borderStyle = useMemo(() => {
    if (!showBorder) return {};
    const gradientColors = colors.join(', ');
    return {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        right: 0,
        height: '2px',
        backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
        backgroundSize: '300% 100%',
        animation: `gradient-text-flow ${animationSpeed}s ease infinite`,
      },
    };
  }, [colors, animationSpeed, showBorder]);

  return (
    <>
      <span className={className} style={{ ...gradientStyle, ...borderStyle }}>
        {children}
      </span>
      <style>{`
        @keyframes gradient-text-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
};

export default GradientText;
