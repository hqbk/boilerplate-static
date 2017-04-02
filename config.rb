###
# Site specific options
###
set :default_title, ""
set :site_description, ""

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

activate :external_pipeline,
         name: :webpack,
         command: build? ? "npm run build" : "npm run watch",
         source: ".tmp/dist",
         latency: 1

set :css_dir, "static"
set :js_dir, "static"
set :images_dir, "static"

ignore "assets/*"

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, no_swf: true
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  activate :asset_hash
end
