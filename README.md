# John Dee Summaries

Live site: [https://t3dy.github.io/JohnDeeSummaries/](https://t3dy.github.io/JohnDeeSummaries/)

Static browsing site for a summarized John Dee corpus. It collects index-card
summaries and full detail pages for Dee's primary-source sections, journal and
daybook entries, dated spirit-action summaries, Casaubon OCR review candidates,
long-form chapter essays on Deborah E. Harkness's *John Dee's Conversations
with Angels*, and separate scholarship tabs for Sherman, Parry, Szőnyi,
Håkansson, Clucas, Walton, and Forshaw.

## Source Workflow

Summaries are produced from the converted Markdown chunks and SQLite index, not
by re-reading the original PDFs. The local source layer is `DeeChunks/markdown/`
plus `DeeChunks/dee_chunks.sqlite`; PDFs are used only to diagnose conversion or
OCR problems, or to rebuild the Markdown chunks.

## What Is Included

- Work-level catalog of Dee primary and attributed writings.
- Biographical timeline of significant events in Dee's life, with
  bibliographical references and source chunk paths.
- Primary-source section summaries for conversations with spirits, letters,
  journals, and related ritual compilations.
- Detailed subsection summaries for the major primary-source groupings.
- Entry-by-entry daybook summaries.
- Dated spirit-action summaries from cleaner primary witnesses.
- Separate Casaubon OCR candidate pages, marked as noisy review material.
- Chapter-by-chapter Harkness pages with long essays on argument, evidence, and
  historiographical stakes.
- Separate scholarship pages for Sherman, Parry, Szőnyi, Håkansson, Clucas,
  Walton, and Forshaw generated from the converted Markdown chunks.

## How To Browse

Use the toolbar at the top of the site to move between categories:

- `Works`
- `Biography`
- `Primary Sections`
- `Subsections`
- `Daybook Entries`
- `Spirit Actions`
- `Casaubon OCR`
- `Harkness`
- `Sherman`
- `Parry`
- `Szőnyi`
- `Håkansson`
- `Clucas`
- `Walton`
- `Forshaw`

Each category page presents searchable index cards. Click any card to open a
full detail page with metadata, longer summary text, retained source text where
available, previous/next navigation, breadcrumbs, and related links.

## Local Use

Open `index.html` directly in a browser:

```text
index.html
```

For a local web server from this repository root:

```powershell
python -m http.server 8765
```

Then visit:

```text
http://localhost:8765/
```

## Deployment

This repository is deployed with GitHub Pages from the root of the `main`
branch. The `.nojekyll` file is included so GitHub Pages serves the generated
static files exactly as written.

## Source Notes

This repository contains the generated static website, not the full PDF corpus
or the SQLite build database. The local generation pipeline that produced it
keeps the larger corpus conversion, chunk database, Markdown chunks, and summary
builders outside this deployment repository.
