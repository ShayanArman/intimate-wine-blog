import type { CSSProperties, ReactNode } from "react";
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

  staticImage: {
    display: "block",
    width: "100%",
    height: "auto",
  },

  fillImage: {
    objectFit: "cover" as const,
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
  figureClassName?: string;
  frameClassName?: string;
  captionClassName?: string;
  aspectRatio?: CSSProperties["aspectRatio"];
};

export default function GangsterImage({
  alt,
  caption,
  figureClassName,
  frameClassName,
  captionClassName,
  aspectRatio,
  className,
  fill,
  width,
  height,
  ...imageProps
}: GangsterImageProps) {
  const { classes, cx } = useStyles();
  const resolvedAspectRatio =
    aspectRatio ??
    (typeof width === "number" && typeof height === "number"
      ? `${width} / ${height}`
      : fill
        ? "16 / 10"
        : undefined);

  return (
    <figure className={cx(classes.figure, figureClassName)}>
      <div
        className={cx(classes.frame, frameClassName)}
        style={resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : undefined}
      >
        <Image
          {...imageProps}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          className={cx(fill ? classes.fillImage : classes.staticImage, className)}
        />
      </div>

      {caption ? <figcaption className={cx(classes.caption, captionClassName)}>{caption}</figcaption> : null}
    </figure>
  );
}
