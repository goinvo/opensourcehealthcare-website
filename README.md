# opensourcehealthcare.org

A static site for opensourcehealthcare.org built using [GatsbyJS](https://www.gatsbyjs.org/).

## Getting started

_NOTE:_ To work in this project, it is assumed you have basic familiarity with using the command line and Git/GitHub. If you are not comfortable with these tools, please reach out to a coworker for some help.

_MORE NOTE:_ When copy/pasting the examples, do not include the `$`. This is used to represent your command line prompt, showing individual commands on new lines.

_MANY NOTE:_ You may be required to install additional dependencies like XCode command line tools on Mac.

### Install Node

This project uses [NodeJS](https://nodejs.org/en/) at its core.

```bash
$ brew update
$ brew install node
```

### Clone repository

Use the command line or your GitHub app to clone this project repository to your machine. When using the command line, make sure you're already in the folder you want the project downloaded to.

```bash
$ git clone https://github.com/goinvo/opensourcehealthcare.git
```

### Install project dependencies

```bash
$ cd opensourcehealthcare
$ npm install
```

### Start it up

```bash
$ npm run develop
```

Or if you've already set up your environment to work with yarn, you can use

```bash
$ yarn develop
```

Give it a few seconds, and then head on over to [http://localhost:8000/](http://localhost:8000/) and you should see your instance of the working website.

## Working with images

### Preparing your images

Export your image (Photoshop example steps):

- Make sure your image is at 72 dpi, and 2000px wide
- Select 'File' > 'Save As'.
- Name the image appropriately using all lowercase letters, numbers, and dashes (that means don't use uppercase or underscores, etc).
- Use the 'JPEG' format (or 'PNG' if transparency is required), and click 'Save'.
- Use 'Progressive' Format option with 3 scans, or 'interlaced' if PNG.
- Aim for a file size less than 1M, ideally around 500KB or less

## Adding an article

First and foremost, remember to make a new branch in Git. It is reasonable to name it something like `article-<name>`.

## Make a new file

Once you're set up on a new branch, make a new Markdown file in the `src/articles` folder. Name the file with all lower-case letters and hyphens, with the `.md` extension. The convention is to use the article name (e.g. `billion-dollar-paywalls.md`). It's fine if the name is a bit long, but also probably best to not go crazy on it, keep in mind that the name is used in the URL as the path to that article, so it should be concise and optimized for search engines.

### Add the frontmatter

Inside the file, the first thing to do is add the frontmatter at the very top of the file. This is meta data associated with the case study, used throughout the rest of the website. It must be at the top and include the `---` syntax, as shown below:

```md
---
title: 'Open Source Healthcare Q&A'
image: '/images/articles/open-source-qa-topol/hero.jpg'
author: 'Eric Topol'
upNext:
  - 'patient-payer-consumer-citizen'
  - 'estonian-healthcare-system'
  - 'open-first-health-policy'
hidden: false
metaDescription: ''
references:
  - title: 'Reference Title'
    link: 'https://www.goinvo.com/features/determinants-of-health/'
---
```

You can also look at other existing articles as examples.

Let's break down the fields:

1. `title` (required)
   This is the title that will be shown on cards throughout the _rest_ of the site, not necessarily the title shown on the case study page (you'll make than with an h1 or `#` in Markdown).
2. `image` (required)
   The path to the image on Dropbox to be used as the hero and the card image on other pages.
3. `author` (required)
   The author of the article.
4. `upNext` (required)
   A YAML array of ID's associated with other articles to link to at the bottom of the page. The ID is simply the filename of the case study you'd like to link to without the extension. See the example above.
5. `hidden`
   Controls whether the case study should show up as a page and be included in lists of articles throughout the site. Set to `true` if this article is a work in progress. Keep in mind that even though it will be hidden from the site, this content is still publicly accessible on GitHub, so never include any content that we don't have author and editor approval on.
9. `metaDescription` (not required, but you should really include this)
   A concise summary of the article, usually only a sentence or two long, used for search engines and link details. For more information, read [how to create the right meta description](https://yoast.com/meta-descriptions/).

_NOTE:_ If you don't include required frontmatter fields, the app may crash.

### Viewing your article as you develop content

When you add a new markdown file, it is necessary to restart your development server. Use `ctrl + c` to kill your process then start it up again with ` develop`. This will add your new markdown file in the list of case studies. The article you're working on will become accessible at `http://localhost:8000/articles/<filename>` (filename without `.md` file extension).

### Add the content

For the most part, just write plain old Markdown. If you're unfamiliar with Markdown, it's a very basic programming language, designed to make writing content a breeze. Read up on the syntax [here](https://daringfireball.net/projects/markdown/syntax).

Each page should have exactly one `h1` title, written with markdown using `#` (e.g. `# This is the title`). Subsequent sections can get `h2` (`##`), `h3` (`###`), and so on.
