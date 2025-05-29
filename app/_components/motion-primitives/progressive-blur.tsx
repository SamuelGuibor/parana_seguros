'use client';

type ProgressiveBlurProps = {
    className?: string;
    direction: 'left' | 'right';
    blurIntensity?: number;
};

export function ProgressiveBlur({
    className,
    direction,
    blurIntensity = 3,
}: ProgressiveBlurProps) {
    const style =
        direction === 'left'
            ? {
                background:
                    `linear-gradient(to right, rgba(0,0,0,${blurIntensity * 0.15}), transparent)`,
            }
            : {
                background:
                    `linear-gradient(to left, rgba(0,0,0,${blurIntensity * 0.15}), transparent)`,
            };

    return <div className={className} style={style} />;
}
