import React from 'react';
import FadeIn from 'react-fade-in';
import { ArrowRightIcon } from "@radix-ui/react-icons";



export const ButtonGooey = () => {
  return (
    <FadeIn delay = {600} transitionDuration={2000}>
      <div className="wrapper">
        <button className="button">
          submit diagnosis
            <div className="bubble" onClick={() => window.location.href = 'result.html'}>
            <ArrowRightIcon className="h-8 w-8" />
            
          </div>
        </button>
      </div>

      <svg
        className="absolute hidden"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="0 0 1 0 0  0 1 1 0 0  1 0 1 0 1  0 0 0 20 -10"

              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>


      <style jsx>{`
        .wrapper {
          filter: url("#gooey");
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .button {
          background: linear-gradient(to right, #c28df9, #8f42ce);
          color: #eee;
          display: inline-flex;
          font-weight: bold;
          padding: 0 24px 0 24px;
          border-radius: 12px;
          font-size: 1.25rem;
          line-height: 1.25rem;
          height: 64px;
          align-items: center;
          
        }

        .bubble {
          color: #fff;
          z-index: -10;
          display: flex;
          background: linear-gradient(to right, #782ead, #7d3daa);

          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          position: absolute;
          content: "";
          border-radius: 12px;
          transition: transform 0.8s;
          transition-timing-function: bezier(0.2, 0.8, 0.2, 1.2);
          transform: translateX(80%) translateY(0%);
          cursor: pointer;
        }

        .button:hover .bubble {
          transform: translateX(370%) translateY(0%);
        }
      `}</style>
    </FadeIn>
  );
}

export default ButtonGooey;
