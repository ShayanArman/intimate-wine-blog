import { type CSSProperties, type ReactNode, useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { Skeleton, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  frame: {
    position: "relative" as const,
    overflow: "hidden",
    borderRadius: "var(--radius-md)",
  },

  skeleton: {
    position: "absolute" as const,
    inset: 0,
    zIndex: 1,
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
}));

export type GangsterImageProps = ImageProps & {
  caption?: ReactNode;
  aspectRatio?: CSSProperties["aspectRatio"];
};

export default function GangsterImage({
  alt,
  src,
  caption,
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
    <figure>
      <div
        className={cx(classes.frame)}
        style={resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : undefined}
      >
        <Skeleton
          className={cx(classes.skeleton, isLoaded && classes.skeletonHidden)}
          visible={!isLoaded}
          height="100%"
          width="100%"
          aria-hidden="true"
        />
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

      {caption ? <figcaption className={cx(classes.caption)}>{caption}</figcaption> : null}
    </figure>
  );
}
