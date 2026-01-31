import Spline from '@splinetool/react-spline';

export default function SplineComponent() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-auto">
      <Spline
        scene="https://prod.spline.design/vowF0pcVkr45MJmV/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent' 
        }}
      />
    </div>
  );
}