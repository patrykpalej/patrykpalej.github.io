# _plugins/redirect_generator.rb
require 'json'

module Jekyll
  class RedirectPageGenerator < Generator
    priority :highest

    def generate(site)
      # Load the redirects.json file
      redirects = JSON.parse(File.read(File.join(site.source, 'redirects.json')))

      # Generate a redirect page for each entry
      redirects.each do |redirect|
        site.pages << RedirectPage.new(site, site.source, redirect['from'], redirect['to'])
      end
    end
  end

  # A class to generate the redirect pages
  class RedirectPage < Page
    def initialize(site, base, from, to)
      @site = site
      @base = base
      @dir  = from
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'redirect.html')
      self.data['redirect_to'] = to
    end
  end
end
