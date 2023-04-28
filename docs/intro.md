---
sidebar_position: 1
---

# Documentation Intro

Welcome to the documentation pages for [GeauxWeisbeck4.dev](https://geauxweisbeck4.dev)! You will find information, tutorials, and other technical features of projects that I've completed, coding interview questions and answers, and other things that I've found interesting enough to put into my formal docs.

Don't get the docs confused my blog or my notes - these are completely different sections that are separate from my project docs. These docs are meant to document the projects in a way that somebody should theoretically be able to build the project themselves.

## How to use these

The beauty is that all you have to do is just read them! Well, you can also use them as a basis for creating your own project.

If you want to try out any of the projects, you can always fork the repository on GitHub (also you don't have to, you can just run it locally) and give it a go yourself with the following:

```
git clone https://github.com/geauxweisbeck4/some-new-project.git
cd some-new-project
npm install  // or yarn install
npm run dev // or yarn dev
```

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- Whatever other dependencies are required in the project - `npm install` should take care of that, hence the reason for needing Node.js

## How to recreate this website

You can fork the website repository, just like you did above. You can also create your own Docusaurus website with the following instructions (unedited for full Docusaurus experience):

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

## Enjoy this website!

If you have any questions or want to collaborate, just reach out to me via the contact form in the contact section. Happy reading!
