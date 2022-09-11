import usePaletteContext from '../usePaletteContext';

export default () => {
  const palette = usePaletteContext();
  return [
    `.color1-bg-hover {
      background-color: ${palette.colorA} !important;
    }`,
    `.color1-bg-hover:hover {
      background-color: ${palette.colorADark} !important;
    }`,
    `.color1-border-hover:hover {
      border-color: ${palette.colorA}88 !important;
    }`,
    `.color1-shadow-hover:hover {
      box-shadow: 1px 1px 8px 0 ${palette.colorA}22 !important;
    }`,
    `.dark-text-hover:hover {
      color: ${palette.dark} !important;
    }`,
    `.color1-text-hover:hover {
      color: ${palette.colorA} !important;
    }`,
    `@keyframes fadeInRight {
        0% { opacity: 1; }
        29% { opacity: 0.5; transform: translate3d( 0, 0, 0); }
        30% { opacity: 0; transform: translate3d(50%, 0, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); } 
    }
    .fadeInRight { animation-name: fadeInRight; }`,
    `@keyframes fadeInLeft {
        0% { opacity: 1; }
        29% { opacity: 0.5; transform: translate3d( 0, 0, 0); }
        30% { opacity: 0; transform: translate3d(-50%, 0, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); } 
    }
     .fadeInLeft { animation-name: fadeInLeft; }`,
    `@keyframes fadeInUp {
        0% { opacity: 1; }
        29% { opacity: 0.5; transform: translate3d( 0, 0, 0); }
        30% { opacity: 0; transform: translate3d(0, 50%, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); } 
    }
    .fadeInUp { animation-name: fadeInUp; }`,
    `@keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
    
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    
    .fadeInDown {
      animation-name: fadeInDown;
    }`,
    `@keyframes fadeOutUp {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
    }
    
    .fadeOutUp {
      animation-name: fadeOutUp;
    }`,
  ].join('\n');
};
