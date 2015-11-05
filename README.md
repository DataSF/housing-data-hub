Housing Data Hub
===============

The housing data hub is our go to resource to learn about housing programs in San Francisco and the data behind them. More broadly, it is the first in what we hope will be other strategic releases of data.  You can read more about strategic releases in this blog post.

We've built the bones of this site in anticipation of possibly spinning up future hubs, but there's still work to do to abstract the code into something a little more configurable and generalizable.

At its core, this is just a [Jekyll site that leverages open data APIs, CSV files and some great open source javascript libraries](http://housing.datasf.org/about/#acknowledgements) to handle charting and visualization.

There are two streams of activity left to complete:

1. Tighten up the code on the existing hub (refactoring)
2. Abstracting the site into a "platform" that can be simple to deploy for others and ourselves including great documentation preferencing conventions as much as possible

In May, we should have a blog post up describing how we used the technology to support our approach to co-creating the housing data hub with partners across the City.

##Contributing
We are catching up with ourselves now and working on documenting some outstanding issues. Those should all be up soon. In the meantime, feel free to fork the code and poke around. Collaboration is welcome, but we recommend reaching out through the issues first before working on anything and submitting any pull requests. PRs will be reviewed, but there's no guarantee that we can accept them.

Contributions around structural and code improvements are the highest priority. We also welcome fixing typos if you find them.

###Getting started
If you want to take a look on your own machine, here's how you can get up and running:

Do this the first time:

1. Fork and clone the repo to a directory on your machine
2. Make sure you have Ruby installed by running `ruby --version` You should have either `1.9.3` or `2.0.0` If you don't, follow [these installation instructions](https://www.ruby-lang.org/en/downloads/).
3. Get Bundler by running `gem install bundler`. Bundler is a package mangager that makes versioning Ruby software a lot easier.
4. Now issue the command `bundle install` in the cloned repo root directory, this will set you up with Jekyll and the key dependencies

To run the site on your machine:

Issue the command `bundle exec jekyll serve` and the site should be available at `http://localhost:4000`

Check our the Jekyll documentation [here](http://jekyllrb.com/docs/usage/) and the Github Pages documentation [here](https://help.github.com/articles/using-jekyll-with-pages/) for more.
