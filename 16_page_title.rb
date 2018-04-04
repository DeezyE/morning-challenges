#
# Page Title
#
# Write a method that takes a URL and
# returns the website's title.
#
# Examples:
# pageTitle("http://google.com") => "Google"
# pageTitle("http://www.reddit.com") => "reddit: the front page of the internet"
#
# Check your answers by running the tests:
# ruby tests/16_page_title_test.rb
#

require 'net/http'


def pageTitle(url)
resBody = Net::HTTP.get_response(URI(url)).body
sub_string = /<title>(.*)<\/title>/.match(resBody)
sub_string[1]
end
