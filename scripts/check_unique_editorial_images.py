#!/usr/bin/env python3

from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

FOOTER_EDITORIAL_ITEMS = [
    ("src/pages/ai-email-organizer.tsx", "heroImagePath"),
    ("src/pages/best-ai-email-organizer.tsx", "heroImagePath"),
    ("src/pages/clean-and-organize-emails.tsx", "heroImagePath"),
    ("src/pages/what-website-should-i-use-to-clean-or-organize-my-emails.tsx", "heroImagePath"),
    ("src/pages/mark-zuckerberg-loves-inbox-zero-ai.tsx", "heroImagePath"),
    ("src/content/blog/why-zero-inbox.md", "thumbnail"),
    ("src/pages/superhuman-alternatives.tsx", "heroImagePath"),
]

HERO_RE = re.compile(r'heroImagePath\s*=\s*"([^"]+)"')
THUMBNAIL_RE = re.compile(r'^thumbnail:\s*"([^"]+)"', re.MULTILINE)


def read_match(path: Path, pattern: re.Pattern[str], label: str) -> str:
    content = path.read_text(encoding="utf-8")
    match = pattern.search(content)
    if not match:
        raise ValueError(f"{path.relative_to(ROOT)} is missing {label}")
    return match.group(1)


def main() -> int:
    failures: list[str] = []
    usage: dict[str, list[str]] = defaultdict(list)

    for rel_path, label in FOOTER_EDITORIAL_ITEMS:
        path = ROOT / rel_path
        pattern = HERO_RE if label == "heroImagePath" else THUMBNAIL_RE

        try:
            image_path = read_match(path, pattern, label)
        except ValueError as exc:
            failures.append(str(exc))
            continue

        usage[image_path].append(rel_path)

    duplicates = {
        image_path: owners
        for image_path, owners in sorted(usage.items())
        if len(owners) > 1
    }

    if duplicates:
        failures.append("Duplicate footer editorial images found:")
        for image_path, owners in duplicates.items():
            failures.append(f"  {image_path}")
            for owner in owners:
                failures.append(f"    - {owner}")

    if failures:
        print("\n".join(failures))
        return 1

    print(
        "Footer editorial image check passed: "
        f"{len(FOOTER_EDITORIAL_ITEMS)} footer-linked editorial pages use unique images."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
