Intro to GitHub - for IML400
===============
# What Is Git? What is GitHub?

* Git is a source code version control system. It saves different version (called "commits") or snapshots of your code. You can move back and forth in time to see different versions of your code.

* GitHub is a [website](github.com) where you can publish your Git repositories for public download and possible collaboration. You can also browse other people's coding projects. Every programming language imaginable is shared on GitHub. Many projects are open source.

## Why Use It?

*   track changes (a.k.a. version control = undo or go back to earlier version of your program if you made a mistake)
*   to share your code with others

## Version Control models

*   _centralized_ - one central server. each person checks out and merges changes to a main server. only one person can "check out" the code at a time.
*   _distributed_ - each person has a local repository. when they make changes, they "check in" with the main online copy and reconcile the two together. (GitHub is this style)

# Goals of Git

*   It's fast - add to your team and code base quickly
*   it's distributed
*   each commit has a corresponding [hash](https://en.wikipedia.org/wiki/Hash_function) (meaning every single change is tracked)
*   everyone working on the code has a local copy of the history of the program

## Additional notes

*   A mental model to use: Pretend you are working on a Word document and you hit undo. Then you hit undo again. Then again. GitHub is a much more robust way to go back and forth in different versions of your own code. (that's called version control).
*   You add and commit your code on your own computer (git), and when you are ready you push it online to your repository on your github page.
*   If you fork (aka copy) someone else's code/program, you pull it onto your computer so that you can edit the code. Afterwards, you can push it to your own online repository (aka repo) or you can do a pull request to the original code and that person will look at your code and decide to integrate the two together (or not).

# Terms

* **Repository** - A directory or storage space where your projects can live. Sometimes GitHub users shorten this to “repo.” It can be local to a folder on your computer, or it can be a storage space on GitHub or another online host. You can keep code files, text files, image files, you name it, inside a repository.

* **Version Control** - Basically, the purpose Git was designed to serve. When you have a Microsoft Word file, you either overwrite every saved file with a new save, or you save multiple versions. With Git, you don’t have to. It keeps “snapshots” of every point in time in the project’s history, so you can never lose or overwrite it.

* **Commit** - This is the command that gives Git its power. When you commit, you are taking a “snapshot” of your repository at that point in time, giving you a checkpoint to which you can reevaluate or restore your project to any previous state.

# Markdown

* Markdown is a markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is used by github (and other sites) to format text and readme files. You can do it in the terminal, in a text editor, on github.com or with the program [Mou](http://25.io/mou/), among others.
* Many places to learn markdown, such as [here](https://en.wikipedia.org/wiki/Markdown) on wikipedia.
