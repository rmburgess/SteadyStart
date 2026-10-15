"""Rough reading-level check for Steady Start text.

Usage: python3 tools/readability.py

Pulls the quoted text out of the content files and reports the
Flesch-Kincaid grade level for each file, plus the hardest sentences.
Goal: about grade 3 to 4. Names of laws, hotlines and medical words
(like "prenatal") will push the score up a little; that's expected.
"""
import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FILES = ["js/guide-content.js", "js/pages-content.js", "js/evidence-data.js", "index.html"]
SKIP_KEYS = ("url", "id", "call", "unit", "label", "tag")


def syllables(word):
    w = word.lower().strip("'")
    if len(w) <= 3:
        return 1
    w = re.sub(r"(?:[^laeiouy]es|ed|[^laeiouy]e)$", "", w)
    w = re.sub(r"^y", "", w)
    return max(1, len(re.findall(r"[aeiouy]{1,2}", w)))


def text_from_js(src):
    out = []
    for key, s in re.findall(r'(?:(\w+)\s*:\s*)?"((?:[^"\\]|\\.)*)"', src):
        if key in SKIP_KEYS or s.startswith("http") or len(s.split()) < 3:
            continue
        out.append(s.replace('\\"', '"'))
    return " ".join(out)


def text_from_html(src):
    src = re.sub(r"<(script|style|head)[^>]*>.*?</\1>", " ", src, flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", " ", src))


def grade(text):
    sentences = [s for s in re.split(r"(?<=[.!?])\s+", text) if re.search(r"[A-Za-z]", s)]
    words = re.findall(r"[A-Za-z']+", text)
    if not sentences or not words:
        return 0, sentences
    syl = sum(syllables(w) for w in words)
    return 0.39 * len(words) / len(sentences) + 11.8 * syl / len(words) - 15.59, sentences


def sentence_grade(s):
    return grade(s)[0]


for name in FILES:
    src = (ROOT / name).read_text(encoding="utf-8")
    text = text_from_html(src) if name.endswith(".html") else text_from_js(src)
    g, sentences = grade(" ".join(text.split()))
    print("%-24s grade %.1f  (%d sentences)" % (name, g, len(sentences)))
    if "-v" in sys.argv:
        for s in sorted(sentences, key=sentence_grade, reverse=True)[:5]:
            print("    %.1f  %s" % (sentence_grade(s), s[:110]))
