#!/usr/bin/python
# -*- coding: utf-8 -*-

from textteaser import TextTeaser
import sys

# article source: https://blogs.dropbox.com/developers/2015/03/limitations-of-the-get-method-in-http/
tt = TextTeaser()

sentences = tt.summarize(sys.argv[1], sys.argv[2])

for sentence in sentences:
  print sentence