import { type CSSProperties, type ReactNode, useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  figure: {
    margin: "2rem 0",
  },

  frame: {
    position: "relative" as const,
    overflow: "hidden",
    borderRadius: "var(--radius-md)",
    background:
      "linear-gradient(180deg, rgba(15, 29, 61, 0.02) 0%, rgba(15, 29, 61, 0.06) 100%)",
    boxShadow: "0 16px 40px rgba(15, 29, 61, 0.12)",
  },

  skeleton: {
    position: "absolute" as const,
    inset: 0,
    zIndex: 1,
    background:
      "linear-gradient(110deg, #ffffff 0%, #ffffff 34%, #9ea5b4 50%, #ffffff 66%, #ffffff 100%)",
    backgroundSize: "200% 100%",
    animation: "gangsterImageShimmer 1.5s linear infinite",
    transition: "opacity 220ms ease",
    pointerEvents: "none" as const,
  },

  skeletonHidden: {
    opacity: 0,
  },

  staticImage: {
    display: "block",
    width: "100%",
    height: "auto",
    opacity: 0,
    transition: "opacity 220ms ease",
  },

  fillImage: {
    objectFit: "cover" as const,
    opacity: 0,
    transition: "opacity 220ms ease",
  },

  imageLoaded: {
    opacity: 1,
  },

  caption: {
    maxWidth: 640,
    margin: "0.9rem auto 0",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "rgba(15, 29, 61, 0.64)",
    textAlign: "center" as const,
    textWrap: "balance" as const,
  },

  "@keyframes gangsterImageShimmer": {
    "0%": {
      backgroundPosition: "100% 0",
    },
    "100%": {
      backgroundPosition: "-100% 0",
    },
  },
}));

export type GangsterImageProps = ImageProps & {
  caption?: ReactNode;
  figureClassName?: string;
  frameClassName?: string;
  captionClassName?: string;
  aspectRatio?: CSSProperties["aspectRatio"];
};

export default function GangsterImage({
  alt,
  src,
  caption,
  figureClassName,
  frameClassName,
  captionClassName,
  aspectRatio,
  className,
  fill,
  width,
  height,
  onLoad,
  onLoadingComplete,
  ...imageProps
}: GangsterImageProps) {
  const { classes, cx } = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const resolvedAspectRatio =
    aspectRatio ??
    (typeof width === "number" && typeof height === "number"
      ? `${width} / ${height}`
      : fill
        ? "16 / 10"
        : undefined);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <figure className={cx(classes.figure, figureClassName)}>
      <div
        className={cx(classes.frame, frameClassName)}
        style={resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : undefined}
      >
        <div className={cx(classes.skeleton, isLoaded && classes.skeletonHidden)} aria-hidden="true" />
        <Image
          {...imageProps}
          alt={alt}
          src={src}
          fill={fill}
          width={width}
          height={height}
          onLoad={(event) => {
            setIsLoaded(true);
            onLoad?.(event);
          }}
          onLoadingComplete={(result) => {
            setIsLoaded(true);
            onLoadingComplete?.(result);
          }}
          className={cx(
            fill ? classes.fillImage : classes.staticImage,
            isLoaded && classes.imageLoaded,
            className,
          )}
        />
      </div>

      {caption ? <figcaption className={cx(classes.caption, captionClassName)}>{caption}</figcaption> : null}
    </figure>
  );
}
