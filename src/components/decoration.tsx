"use client";

import { Player } from "@lottiefiles/react-lottie-player";

type AnimatedBackgroundProps = {
  className?: string;
};

export const AnimatedBackground = (props: AnimatedBackgroundProps) => {
  const { className } = props;

  return (
    <div className={`fixed ${className}`}>
      <Player autoplay loop src={"/json/starry-background.json"}></Player>
    </div>
  );
};
