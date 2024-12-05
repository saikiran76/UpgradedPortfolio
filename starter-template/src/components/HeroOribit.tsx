import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';

export const HeroOrbit = ({ children, deg, className }: PropsWithChildren<{ deg: number, className?: string }>) => {
    return(
        <div className="absolute top-14 left-[49%] -translate-x-1/2 z-2">
          <div className='animate-spin [animation-duration:10s]'>
            <div
             className={twMerge("flex justify-start", className)}
             style={{
                transform: `rotate(${deg}deg)`,
                // height: `${size}px`,
                // width: `${size}px`
            }}>
              <div className=""
              style={{
                // transform:`rotate(${deg}deg)`
              }}>{children}</div>
            </div>
          </div>
        </div>
    )
}

// animate-spin [animation-duration:30s]

// animate-spin [animation-duration:5s]